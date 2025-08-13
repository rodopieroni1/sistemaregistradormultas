import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DenunciasComponent } from './pages/denuncias/denuncias.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'denuncias', component: DenunciasComponent },
];
