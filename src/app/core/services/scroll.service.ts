import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly activeSection = signal('home');
  private isBrowser: boolean;
  private rafId = 0;
  private sections: HTMLElement[] = [];

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
    this.sections = Array.from(this.document.querySelectorAll<HTMLElement>('section[id]'));
    this.updateActiveSection();
    window.addEventListener('scroll', this.queueActiveSectionUpdate, { passive: true });
    window.addEventListener('resize', this.queueActiveSectionUpdate, { passive: true });
  }

  scrollTo(target: string): void {
    if (!this.isBrowser) {
      return;
    }

    this.activeSection.set(target);
    const element = this.document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private queueActiveSectionUpdate = (): void => {
    cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => this.updateActiveSection());
  };

  private updateActiveSection(): void {
    if (!this.sections.length) {
      return;
    }

    const navOffset = 120;
    const current = this.sections.reduce((active, section) => {
      const sectionTop = section.getBoundingClientRect().top - navOffset;
      return sectionTop <= 0 ? section : active;
    }, this.sections[0]);

    this.activeSection.set(current.id);
  }
}
