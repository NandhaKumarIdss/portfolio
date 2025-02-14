import { Component, OnInit } from '@angular/core';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faPaintBrush, faServer, faUserTie, faBriefcase, faTools } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-services-providing',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './services-providing.component.html',
    styleUrl: './services-providing.component.scss'
})
export class ServicesProvidingComponent implements OnInit {
  ngOnInit(): void {

  }
  icons = {
    web: faCode,
    uiux: faPaintBrush,
    backend: faServer,
    freelance: faUserTie,
    business: faBriefcase,
    support: faTools
  };

}
