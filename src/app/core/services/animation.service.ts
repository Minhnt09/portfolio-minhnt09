import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AnimationService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  reveal(element: HTMLElement, delay = 0): void {
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
      element.classList.add('is-visible');
      return;
    }

    element.style.setProperty('--reveal-delay', `${delay}ms`);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(element);
  }
}
