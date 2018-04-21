import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessagesService {

  messages = [];
  messages$ = new Subject();

  constructor() {
  }

  setMessages(message) {
    this.messages.push(message);
    this.messages$.next(this.messages);
  }

  getMessages() {
    return this.messages$;
  }

}
