export interface ContactFormPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface ContactSubmissionMetadata {
  timestamp: string;
  userAgent?: string;
  referrer?: string;
}

export interface ContactSubmissionResponse {
  ok: boolean;
  status: number;
  data?: unknown;
}

const WEBHOOK_URL = 'https://hook.eu2.make.com/wschb6ywmba8hmf5kbq8s8qce8gcmin1';

function getMetadata(): ContactSubmissionMetadata {
  const isBrowser = typeof window !== 'undefined';

  return {
    timestamp: new Date().toISOString(),
    userAgent: isBrowser ? navigator.userAgent : undefined,
    referrer: isBrowser ? document.referrer : undefined,
  };
}

export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<ContactSubmissionResponse> {
  const enrichedPayload = {
    ...payload,
    ...getMetadata(),
  };

  const requestInit: RequestInit & { keepalive?: boolean } = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    mode: 'cors',
    credentials: 'omit',
    keepalive: true,
    cache: 'no-store',
    body: JSON.stringify(enrichedPayload),
  };

  let response: Response | null = null;

  let responseData: unknown;

  try {
    response = await fetch(WEBHOOK_URL, requestInit);

    const contentType = response.headers.get('Content-Type') ?? '';
    if (contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }
  } catch (fetchError) {
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const beaconPayload = new Blob([JSON.stringify(enrichedPayload)], {
        type: 'application/json',
      });
      const beaconSent = navigator.sendBeacon(WEBHOOK_URL, beaconPayload);

      if (beaconSent) {
        return {
          ok: true,
          status: 204,
          data: undefined,
        };
      }
    }

    throw fetchError;
  }

  try {
    const contentType = response.headers.get('Content-Type') ?? '';
    if (contentType.includes('application/json')) {
      responseData = await response.json();
    } else {
      responseData = await response.text();
    }
  } catch (error) {
    console.warn('Unable to parse webhook response body', error);
  }

  if (!response?.ok) {
    const error = new Error(
      `Webhook submission failed with status ${response.status}`,
    );

    (error as Error & { details?: unknown }).details = responseData;

    throw error;
  }

  return {
    ok: true,
    status: response.status,
    data: responseData,
  };
}

