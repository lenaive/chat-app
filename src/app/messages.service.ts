import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessagesService {

  messages: Array<string>;
  msgObs$: Observable<string[]>;

  constructor() {
    this.messages = [];
  }

  setMessages(message) {
    this.messages.push(message);
  }

  getMessages() {
    this.msgObs$ = new Observable<string[]>((observer) => {
        observer.next(this.messages);
    });
    return this.msgObs$;
  }

}
