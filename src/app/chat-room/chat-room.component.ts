import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessagesService} from '../messages.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit, OnDestroy {
  user: string;
  messages: any;
  greet: string;
  userName: string;

  constructor(private messagesService: MessagesService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.userName = decodeURI(params['userName']));
    this.messagesService.getMessages().subscribe(res => this.messages = res);
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
