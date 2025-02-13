import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  private viewportHeightSubject = new BehaviorSubject<number>(this.getAdjustedHeight());
  viewportHeight$ = this.viewportHeightSubject.asObservable();

  constructor() {
    this.updateViewportHeight();
    window.addEventListener('resize', () => this.updateViewportHeight());
  }

  private updateViewportHeight() {
    this.viewportHeightSubject.next(this.getAdjustedHeight());
  }

  private getAdjustedHeight(): number {
    const headerHeight = 80;
    return window.innerHeight - headerHeight;
  }
}
