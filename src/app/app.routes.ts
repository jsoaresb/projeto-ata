import { Routes } from '@angular/router';
import { AtasComponent } from './pages/atas/atas.component';
import { HomeComponent } from './pages/home/home.component';
import { VerAtaComponent } from './pages/ver-ata/ver-ata.component'; // nova importação

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'atas', component: AtasComponent },
  { path: 'ver-ata', component: VerAtaComponent } // nova rota
];
