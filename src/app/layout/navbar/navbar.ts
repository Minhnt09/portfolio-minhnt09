import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { navItems, profile } from '../../core/constants/site-data';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  readonly navItems = navItems;
  readonly profile = profile;
  readonly menuOpen = signal(false);

  constructor(public scroll: ScrollService) {}

  ngOnInit(): void {
    this.scroll.init();
  }

  navigate(target: string): void {
    this.menuOpen.set(false);
    this.scroll.scrollTo(target);
  }
}
