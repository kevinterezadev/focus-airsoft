import { Component, inject } from '@angular/core';
import { ContactService, IMessage } from '../../services/contact-service';
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
  dataForm: IMessage = {
    name:  '',
    email:  '',
    message:  ''
  }
  formSubmitted: boolean = false;

  onSubmit(f: any) {
    this.formSubmitted = true; 

    if (f.invalid) {
      return; 
    }

    this.contactService.pushMessage(this.dataForm);
    
    f.resetForm();
    this.formSubmitted = false;
    
    this.dataForm.name = '';
    this.dataForm.email = '';
    this.dataForm.message = '';
  }
}