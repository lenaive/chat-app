import {Component, Input, OnInit} from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  @Input() messages: any;

  constructor(public messagesService: MessagesService) { }

  ngOnInit() {

  }

}
