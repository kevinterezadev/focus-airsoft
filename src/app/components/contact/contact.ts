import { Component, inject } from '@angular/core';
import { ContactService } from '../../services/contact-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private contactService = inject(ContactService)
  nameFormField =  '';
  emailFormField =  '';
  messageFormField =  '';

  saveMessage() {
    const message = {
      name: this.nameFormField,
      email: this.emailFormField,
      message: this.messageFormField,
    }
    this.contactService.pushMessage(message)
  }
}
