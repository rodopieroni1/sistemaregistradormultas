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
  {
    path: 'app-form-two',
    loadComponent: () =>
      import('./components/form-two/form-two.component').then(
        (m) => m.FormTwoComponent
      ),
  },
  {
    path: 'app-form-three',
    loadComponent: () =>
      import('./components/form-three/form-three.component').then(
        (m) => m.FormThreeComponent
      ),
  },
];
