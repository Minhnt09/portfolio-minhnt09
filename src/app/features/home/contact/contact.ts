import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { profile } from '../../../core/constants/site-data';
import { MagneticButton } from '../../../shared/components/magnetic-button/magnetic-button';
import { SectionTitle } from '../../../shared/components/section-title/section-title';
import { RevealOnScrollDirective } from '../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, SectionTitle, MagneticButton, RevealOnScrollDirective],
  templateUrl: './contact.html',
})
export class Contact {
  readonly profile = profile;
  form = {
    name: '',
    email: '',
    message: '',
  };
}
