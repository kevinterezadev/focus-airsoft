import { Injectable } from '@angular/core';

interface Message {
  name: string,
  email: string,
  message: string
}

@Injectable({
  providedIn: 'root',
})



export class ContactService {
  contactItem: Message = {
    name: '',
    email: '',
    message: ''
  }


  pushMessage(message: Message) {
    const formatedMessage = `
    Nome: ${message.name}
    E-mail: ${message.email}
    Mensagem: ${message.message}
    `;
    console.log('Mensagem recebida do site: ' + formatedMessage)
  }
}
