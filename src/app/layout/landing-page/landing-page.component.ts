import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { HomeComponent } from '../../components/home/home.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { ScrollSpyDirective } from '../../../shared/directives/scroll-spy.directive';
import { FooterComponent } from '../footer/footer.component';
import { ScrollSpyService } from '../../../shared/service/scroll-spy.service';
import { ServicesProvidingComponent } from '../../components/services-providing/services-providing.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { OurWorksComponent } from '../../components/our-works/our-works.component';
import AOS from 'aos';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HomeComponent,
    ContactComponent,
    ScrollSpyDirective,
    FooterComponent,
    ServicesProvidingComponent,
    ExperiencesComponent,
    OurWorksComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {
  @ViewChild('navContent') navContent!: ElementRef;
  private scrollSpyService: ScrollSpyService = inject(ScrollSpyService);




  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setDynamicHeight();
      this.navContent.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
    }, 0);
  }

  private setDynamicHeight(): void {
    const headerHeight = document.querySelector('app-header')?.clientHeight;
    const windowHeight = window.innerHeight;
    if (headerHeight) {
      let availableHeight = windowHeight - headerHeight;
      this.navContent.nativeElement.style.height = `${availableHeight}px`;
    }
  }

  onActiveSectionChange(sectionId: string) {
    this.scrollSpyService.setActiveSection(sectionId);
  }

  private onScroll(): void {
    const scrollTop = this.navContent.nativeElement.scrollTop;
    const header = document.querySelector('app-header nav');

    if (header) {
      if (scrollTop > 50) {
        header.classList.add('shadow-header');
      } else {
        header.classList.remove('shadow-header');
      }
    }

    AOS.init({ duration: 3000 });
    AOS.refresh();
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
