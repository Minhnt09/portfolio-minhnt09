import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, inject, signal } from '@angular/core';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  templateUrl: './custom-cursor.html',
})
export class CustomCursor {
  readonly position = signal({ x: -80, y: -80 });
  readonly hovering = signal(false);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  @HostListener('window:mousemove', ['$event'])
  onMove(event: MouseEvent): void {
    if (!this.isBrowser) {
      return;
    }

    const target = event.target as HTMLElement;
    this.hovering.set(Boolean(target.closest('a, button, input, textarea, .interactive')));
    this.position.set({ x: event.clientX, y: event.clientY });
  }
}
