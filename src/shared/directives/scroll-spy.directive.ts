import { AfterViewInit, Directive, ElementRef, EventEmitter, inject, Output } from '@angular/core';
import AOS from 'aos';

@Directive({
  selector: '[appScrollSpy]',
  standalone: true
})
export class ScrollSpyDirective implements AfterViewInit {
  @Output() activeSectionChange = new EventEmitter<string>();
  private el: ElementRef = inject(ElementRef);
  private container!: HTMLElement;

  ngAfterViewInit() {
    setTimeout(() => {
      this.container = this.el.nativeElement;

      this.container.addEventListener('scroll', () => this.onScroll());

      AOS.init();
    }, 0);
  }

  onScroll() {
    const sections = Array.from(this.container.querySelectorAll('.section')) as HTMLElement[];
    let currentSection: string = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const containerRect = this.container.getBoundingClientRect();

      if (
        rect.top - containerRect.top <= this.container.clientHeight / 2 &&
        rect.bottom > containerRect.top
      ) {
        currentSection = section.getAttribute('id') || '';

        AOS.refreshHard();
      }
    });

    if (currentSection) {
      this.activeSectionChange.emit(currentSection);
    }
  }
}
