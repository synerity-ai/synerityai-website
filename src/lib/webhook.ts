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

  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(enrichedPayload),
  });

  let responseData: unknown;

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

  if (!response.ok) {
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

