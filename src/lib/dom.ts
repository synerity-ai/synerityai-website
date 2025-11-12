interface ScrollOptions {
  offset?: number;
  focusSelector?: string;
}

export function scrollToSection(sectionId: string, options: ScrollOptions = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const element = document.getElementById(sectionId);

  if (!element) {
    return;
  }

  const offset = options.offset ?? 80;
  const top = element.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: 'smooth',
  });

  if (options.focusSelector) {
    window.setTimeout(() => {
      const focusTarget = element.querySelector<HTMLElement>(options.focusSelector!);
      focusTarget?.focus({ preventScroll: true });
    }, 600);
  }
}

