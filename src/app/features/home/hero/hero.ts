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

  constructor(private scroll: ScrollService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
    this.scrollProgress.set(progress);
  }

  goTo(target: string): void {
    this.scroll.scrollTo(target);
  }
}
