import { Component, HostListener, signal } from '@angular/core';
import { profile } from '../../../core/constants/site-data';
import { ScrollService } from '../../../core/services/scroll.service';
import { MagneticButton } from '../../../shared/components/magnetic-button/magnetic-button';
import { ParallaxDirective } from '../../../shared/directives/parallax.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MagneticButton, ParallaxDirective],
  templateUrl: './hero.html',
})
export class Hero {
  readonly profile = profile;
  readonly scrollProgress = signal(0);
  readonly isMobile = signal(false);

  constructor(private scroll: ScrollService) {}

  ngOnInit(): void {
    this.syncViewport();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.syncViewport();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.isMobile()) {
      this.scrollProgress.set(0);
      return;
    }

    const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
    this.scrollProgress.set(progress);
  }

  goTo(target: string): void {
    this.scroll.scrollTo(target);
  }

  private syncViewport(): void {
    this.isMobile.set(window.innerWidth < 768);
    if (this.isMobile()) {
      this.scrollProgress.set(0);
    }
  }
}
