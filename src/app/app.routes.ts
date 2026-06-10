import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProjectDetail } from './features/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects/:slug', component: ProjectDetail },
  { path: '**', redirectTo: '' },
];
