import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { projects } from '../../../core/constants/site-data';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionTitle, RevealOnScrollDirective, RouterLink],
  templateUrl: './projects.html',
})
export class Projects {
  readonly projects = projects;
}
