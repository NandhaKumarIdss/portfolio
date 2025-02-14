import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { SuccessModalComponent } from '../../../shared/modal/success-modal/success-modal.component';
import { SuccessModalService } from '../../../shared/service/success-modal.service';
import { Component, inject, OnInit } from '@angular/core';
import { emailValidator } from '../../../shared/validators/emailValidator';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule, SuccessModalComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private library: FaIconLibrary = inject(FaIconLibrary);
  private successModalService: SuccessModalService = inject(SuccessModalService);
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  contactForm!: FormGroup;

  constructor() {
    this.library.addIcons(faMapMarkerAlt, faPhone, faEnvelope);
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email, emailValidator()]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required, Validators.minLength(50)]),
    });
  }

  disableButton() {
    return this.contactForm.invalid;
  }

  sendEmail() {
    if (this.contactForm.invalid) {
      return;
    }

    const serviceID = 'service_7qlxqxi';
    const templateID = 'template_ws1g12i';
    const userID = 'wfV3f94QolLUpMIT7';
    const templateObj = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      to_name: 'Nandhakumar S',
      message: this.contactForm.value.message,
      subject: this.contactForm.value.subject,
      reply_to: this.contactForm.value.email
    };

    emailjs.send(serviceID, templateID, templateObj, userID)
      .then((response) => {
        console.log('Success!', response.status, response.text);
        this.contactForm.reset();
        this.successModalService.showModal("Message has been sent. We'll get back to you.", "success");
      }, (err) => {
        console.error('Failed...', err);
        this.successModalService.showModal("Failed to send the message. Please try again later.", "error");
      });
  }
}