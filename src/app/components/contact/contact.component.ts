import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { MinWordsDirective } from '../../../shared/directives/min-words.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule, MinWordsDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private library: FaIconLibrary = inject(FaIconLibrary);
  faMapMarkerAlt = faMapMarkerAlt;
  faPhone = faPhone;
  faEnvelope = faEnvelope;

  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  constructor() {
    this.library.addIcons(faMapMarkerAlt, faPhone, faEnvelope);
  }

  sendEmail() {
    const serviceID = 'service_7qlxqxi';
    const templateID = 'template_ws1g12i';
    const userID = 'wfV3f94QolLUpMIT7';

    emailjs.sendForm(serviceID, templateID, '#contact-form', userID)
      .then((response) => {
        console.log('Success!', response.status, response.text);
        alert('Your message has been sent successfully!');
      }, (err) => {
        console.error('Failed...', err);
        alert('Failed to send the message. Please try again later.');
      });
  }


}