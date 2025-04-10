import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as lucide from 'lucide';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    // Renderiza os ícones após o carregamento da aplicação
    lucide.createIcons();
  })
  .catch((err) => console.error(err));
