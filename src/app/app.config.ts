import { ApplicationConfig, importProvidersFrom, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { LightgalleryModule } from 'lightgallery/angular';
import AOS from 'aos';


export class AppModule { }

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      BrowserAnimationsModule,
      BrowserModule,
      LightgalleryModule
    ),
    provideAnimationsAsync(),
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {
        AOS.init({ duration: 3000 });
        window.addEventListener('scroll', () => {
          AOS.refresh();
        });
      },
      multi: true
    }
  ]
};
