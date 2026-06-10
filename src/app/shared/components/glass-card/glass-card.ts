import { Component, ElementRef, HostListener, inject } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  standalone: true,
  templateUrl: './glass-card.html',
})
export class GlassCard {
  private readonly element = inject(ElementRef<HTMLElement>);

  @HostListener('mousemove', ['$event'])
  onMove(event: MouseEvent): void {
    const rect = this.element.nativeElement.getBoundingClientRect();
    this.element.nativeElement.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    this.element.nativeElement.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }
}
