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
    ['University', `${profile.university} - ${profile.major}`],
    ['Experience', 'Frontend Developer Intern at OSP Group'],
    ['Tech Focus', 'Angular, TypeScript, RxJS, REST API'],
    ['Location', profile.location],
    ['Email', profile.email],
    ['English', profile.english],
  ];
}
