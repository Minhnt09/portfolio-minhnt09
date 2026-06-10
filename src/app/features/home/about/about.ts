import { Component } from '@angular/core';
import { profile } from '../../../core/constants/site-data';
import { GlassCard } from '../../../shared/components/glass-card/glass-card';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [GlassCard, SectionTitle, RevealOnScrollDirective],
  templateUrl: './about.html',
})
export class About {
  readonly profile = profile;
  readonly facts = [
    ['University', profile.university],
    ['Experience', 'Frontend projects and continuous learning'],
    ['Tech Focus', 'Angular, TypeScript, UI/UX, Responsive Web'],
    ['Location', profile.location],
    ['Email', profile.email],
  ];
}
