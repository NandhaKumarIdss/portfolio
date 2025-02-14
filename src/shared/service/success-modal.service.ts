import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ModalState {
  visible: boolean;
  message?: string;
  type?: 'success' | 'error';
}

@Injectable({
  providedIn: 'root'
})
export class SuccessModalService {
  private modalState = new BehaviorSubject<ModalState>({ visible: false });

  constructor() { }

  showModal(message?: string, type: 'success' | 'error' = 'success') {
    this.modalState.next({ visible: true, message, type });
  }

  getModalState() {
    return this.modalState.asObservable();
  }
}
