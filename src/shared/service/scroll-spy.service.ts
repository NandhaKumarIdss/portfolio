import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollSpyService {
  private activeSectionSubject = new BehaviorSubject<string>('section1');
  activeSection$ = this.activeSectionSubject.asObservable();

  setActiveSection(sectionId: string) {
    this.activeSectionSubject.next(sectionId);
  }
}
