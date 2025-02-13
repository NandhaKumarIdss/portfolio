import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-custom-photo-container',
  standalone: true,
  imports: [],
  templateUrl: './custom-photo-container.component.html',
  styleUrl: './custom-photo-container.component.scss',
  animations: [
    trigger('rotateCircle', [
      state('start', style({ transform: 'rotate(0deg)' })),
      state('end', style({ transform: 'rotate(360deg)' })),
      transition('start <=> end', [
        animate('6s linear infinite')
      ])
    ])
  ]
})
export class CustomPhotoContainerComponent implements OnInit {
  rotationState = 'start'; 

  ngOnInit() {
    setTimeout(() => {
      this.rotationState = 'end';
    }, 100);
  }
}



