import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core';
import { AnimationService } from '../../core/services/animation.service';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements OnInit {
  @Input() revealDelay = 0;

  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly animation = inject(AnimationService);

  ngOnInit(): void {
    this.element.nativeElement.classList.add('reveal');
    this.animation.reveal(this.element.nativeElement, this.revealDelay);
  }
}
