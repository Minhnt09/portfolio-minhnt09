import { Component } from '@angular/core';
import { experiences } from '../../../core/constants/site-data';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionTitle, RevealOnScrollDirective],
  templateUrl: './experience.html',
})
export class ExperienceSection {
  readonly experiences = experiences;
}
