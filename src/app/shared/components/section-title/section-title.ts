import { Component, Input } from '@angular/core';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './section-title.html',
})
export class SectionTitle {
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() description = '';
}
