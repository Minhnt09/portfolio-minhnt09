import { Component } from '@angular/core';
import { skills } from '../../../core/constants/site-data';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [SectionTitle, RevealOnScrollDirective],
  templateUrl: './tech-stack.html',
})
export class TechStack {
  readonly skills = skills;
}
