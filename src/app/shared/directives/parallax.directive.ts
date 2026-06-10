import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true,
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input() parallaxStrength = 14;

  private rafId = 0;
  private isBrowser: boolean;

  constructor(
    private element: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) platformId: object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.element.nativeElement.style.willChange = 'transform';
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isBrowser || window.matchMedia('(max-width: 768px)').matches) {
      return;
    }

    cancelAnimationFrame(this.rafId);
    this.rafId = requestAnimationFrame(() => {
      const x = (event.clientX / this.document.documentElement.clientWidth - 0.5) * this.parallaxStrength;
      const y = (event.clientY / this.document.documentElement.clientHeight - 0.5) * this.parallaxStrength;
      this.element.nativeElement.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  }
}
