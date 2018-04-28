import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
import { Message } from './messages';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class MessagesService {

  fbMessages
  messages$;

  constructor(db: AngularFirestore) {
    this.fbMessages = db.collection('messages', ref => ref.orderBy('timestamp'));
    this.messages$ = this.fbMessages.valueChanges();
  }

  getMessages() {
    return this.messages$;
  }

  setMessages(message: Message) {
    this.fbMessages.add(message);
  }

}
