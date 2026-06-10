import { Component, computed, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { projects } from '../../core/constants/site-data';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink, RevealOnScrollDirective],
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  private readonly route = inject(ActivatedRoute);
  readonly project = computed(() => {
    const slug = this.route.snapshot.paramMap.get('slug');
    return projects.find((item) => item.slug === slug) ?? projects[0];
  });
}
