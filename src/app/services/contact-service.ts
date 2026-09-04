import { Injectable } from '@angular/core';

export interface IMessage {
  name: string,
  email: string,
  message: string
}

@Injectable({
  providedIn: 'root',
})



export class ContactService {
  contactItem: IMessage = {
    name: '',
    email: '',
    message: ''
  }


  pushMessage(message: IMessage) {
    const formatedMessage = `
    Nome: ${message.name}
    E-mail: ${message.email}
    Mensagem: ${message.message}
    `;
    console.log('Mensagem recebida do site: ' + formatedMessage)
  }
}
