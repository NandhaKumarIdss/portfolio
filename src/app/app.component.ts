import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { LandingPageComponent } from "./layout/landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pdDesign';
}
