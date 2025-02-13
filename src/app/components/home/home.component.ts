import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TypingEffectDirective } from '../../../shared/directives/typing-effect.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TypingEffectDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  jobTitles: string[] = ['Software Engineer.', 'Full Stack Developer.', 'Software Developer.'];
  name: string = 'Nandhakumar S';
  @Output() triggerScrollSpy = new EventEmitter<string>();



  ngOnInit() {
  
  }


  onScrollTo(section: string) {
    this.triggerScrollSpy.emit(section);
  }

}