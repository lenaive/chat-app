import {Component, OnInit} from '@angular/core';
import {MessagesService} from '../messages.service';
import {ActivatedRoute} from '@angular/router';
import {Message} from '../messages';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  messages: Message;
  userName: string;

  constructor(private messagesService: MessagesService, private route: ActivatedRoute) {
    this.messagesService.getMessages().subscribe(res =>  this.messages = res );
  }

  ngOnInit() {

  }

}
