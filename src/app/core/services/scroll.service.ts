import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly activeSection = signal('home');
  private isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  init(): void {
    if (!this.isBrowser) {
      return;
    }

    this.document.documentElement.classList.add('smooth-ready');
    this.observeSections();
  }

  scrollTo(target: string): void {
    if (!this.isBrowser) {
      return;
    }

    const element = this.document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private observeSections(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const sections = Array.from(this.document.querySelectorAll<HTMLElement>('section[id]'));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          this.activeSection.set(visible.target.id);
        }
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.16, 0.32, 0.56] },
    );

    sections.forEach((section) => observer.observe(section));
  }
}
