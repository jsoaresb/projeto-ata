import { Routes } from '@angular/router';
import { AtasComponent } from './pages/atas/atas.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'atas', component: AtasComponent }
];
