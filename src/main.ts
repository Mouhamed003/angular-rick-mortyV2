import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';  // <-- CHEMIN CORRECT

import { appConfig } from './app/app.config';       // Aussi à vérifier

bootstrapApplication(AppComponent, appConfig);

