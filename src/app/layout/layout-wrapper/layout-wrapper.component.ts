import { Component, OnInit, Input, inject } from '@angular/core';
import { ViewportService } from '../../../shared/service/viewport.service';

@Component({
  selector: 'app-layout-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './layout-wrapper.component.html',
  styleUrl: './layout-wrapper.component.scss'
})

export class LayoutWrapperComponent implements OnInit {
  viewportHeight: number = 0;
  private viewportService: ViewportService = inject(ViewportService);


  ngOnInit() {
    this.viewportService.viewportHeight$.subscribe((height: any) => {
      this.viewportHeight = height;
    });
  }
}
