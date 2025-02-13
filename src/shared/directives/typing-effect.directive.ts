import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTypingEffect]',
  standalone: true
})
export class TypingEffectDirective implements OnInit {
  @Input() typingTexts: string[] = []; 
  @Input() typingSpeed: number = 150;   
  @Input() deletingSpeed: number = 50; 
  @Input() delayBetweenWords: number = 1000;

  private displayedText: string = '';
  private charIndex: number = 0;
  private isDeleting: boolean = false;
  private jobIndex: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    const currentJob = this.typingTexts[this.jobIndex];

    if (!this.isDeleting) {
      this.displayedText = currentJob.substring(0, this.charIndex++);
      this.renderer.setProperty(this.el.nativeElement, 'innerText', this.displayedText);

      if (this.charIndex === currentJob.length) {
        setTimeout(() => {
          this.isDeleting = true;
        }, this.delayBetweenWords);
      }
    } 
    else {
      this.displayedText = currentJob.substring(0, this.charIndex--);
      this.renderer.setProperty(this.el.nativeElement, 'innerText', this.displayedText);

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.jobIndex = (this.jobIndex + 1) % this.typingTexts.length;
      }
    }

    const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
    
    setTimeout(() => this.startTypingEffect(), speed);
  }
}