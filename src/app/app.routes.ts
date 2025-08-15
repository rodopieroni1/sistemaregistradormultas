import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'app-form-one',
    loadComponent: () =>
      import('./components/form-one/form-one.component').then(
        (m) => m.FormOneComponent
      ),
  },
];
