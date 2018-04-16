import { Component } from '@angular/core';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: string;
  messages: Array<string>;

  constructor(private messagesService: MessagesService) {
  }

  getMessage() {
    this.messagesService.getMessages().subscribe(res => this.messages = res);
  }

}
