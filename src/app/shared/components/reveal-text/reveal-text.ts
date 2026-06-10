import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reveal-text',
  standalone: true,
  templateUrl: './reveal-text.html',
})
export class RevealText {
  @Input({ required: true }) text = '';
  @Input() tag: 'h1' | 'p' | 'span' = 'span';
}
