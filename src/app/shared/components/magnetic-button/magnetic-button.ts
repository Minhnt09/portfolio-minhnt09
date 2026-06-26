import { Component, ElementRef, HostListener, Input, inject } from '@angular/core';

@Component({
  selector: 'app-magnetic-button',
  standalone: true,
  templateUrl: './magnetic-button.html',
})
export class MagneticButton {
  @Input() href = '';
  @Input() variant: 'primary' | 'ghost' | 'cv' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Input() download = '';

  private readonly element = inject(ElementRef<HTMLElement>);

  @HostListener('mousemove', ['$event'])
  onMove(event: MouseEvent): void {
    if (this.disabled) {
      return;
    }

    const rect = this.element.nativeElement.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
    this.element.nativeElement.style.setProperty('--magnet-x', `${x}px`);
    this.element.nativeElement.style.setProperty('--magnet-y', `${y}px`);
  }

  @HostListener('mouseleave')
  onLeave(): void {
    this.element.nativeElement.style.setProperty('--magnet-x', '0px');
    this.element.nativeElement.style.setProperty('--magnet-y', '0px');
  }
}
