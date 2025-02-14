import { Component, OnInit, inject } from '@angular/core';
import { ScrollSpyService } from '../../../shared/service/scroll-spy.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  private scrollSpyService: ScrollSpyService = inject(ScrollSpyService);
  activeSection: string = 'section1';


  headerList: Array<any> = [
    { id: 'section1', name: 'Home' },
    { id: 'section2', name: 'Services' },
    { id: 'section3', name: 'Experience' },
    { id: 'section4', name: 'My Works' },
    { id: 'section5', name: 'Contact' },
  ];


  ngOnInit() {
    this.scrollSpyService.activeSection$.subscribe((sectionId: string) => {
      this.activeSection = sectionId;
    });
  }

 

  navigateTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }



}
