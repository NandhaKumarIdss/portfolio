import { Component, OnInit, inject } from '@angular/core';
import { SuccessModalService } from '../../service/success-modal.service';

@Component({
  selector: 'app-success-modal',
  standalone: true,
  imports: [],
  templateUrl: './success-modal.component.html',
  styleUrl: './success-modal.component.scss'
})
export class SuccessModalComponent implements OnInit {
  private successModalService: SuccessModalService = inject(SuccessModalService);
  message: string = '';
  isVisible = false;
  type: 'success' | 'error' = 'success';

  constructor() { }

  ngOnInit() {
    this.successModalService.getModalState().subscribe((state) => {
      this.isVisible = state.visible;
      this.message = state.message || "Message has been sent.";
      this.type = state.type || 'success';

      if (this.isVisible) {
        setTimeout(() => {
          this.closeModal();
        }, 3000);
      }
    });
  }

  closeModal() {
    this.isVisible = false;
  }
}