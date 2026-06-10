import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomCursor } from './shared/components/custom-cursor/custom-cursor';
import { Footer } from './layout/footer/footer';
import { Navbar } from './layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CustomCursor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
