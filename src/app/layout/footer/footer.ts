import { Component } from '@angular/core';
import { profile } from '../../core/constants/site-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
})
export class Footer {
  readonly profile = profile;
  readonly year = new Date().getFullYear();
}
