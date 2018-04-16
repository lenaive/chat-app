import {Component, Input, OnInit} from '@angular/core';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit {

  @Input() user: string;

  message: string;
  userName: string;

  constructor(public messagesService: MessagesService) {
  }

  ngOnInit() {
  }

  sendMessage(event) {
    if (this.message === '') {
      return;
    }
    if (event.key === 'Enter' || event.type === 'click') {
      this.userName = this.user !== 'undefined' ? this.user : '';
      this.messagesService.setMessages({
          'message': this.message,
          'user': this.userName
      });

      // Resolver con async
      setTimeout(() => { this.message = ''; }, 1);
    }
  }
}
