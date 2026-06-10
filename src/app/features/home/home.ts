import { Component } from '@angular/core';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { ExperienceSection } from './experience/experience';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { TechStack } from './tech-stack/tech-stack';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, About, Projects, TechStack, ExperienceSection, Contact],
  templateUrl: './home.html',
})
export class Home {}
