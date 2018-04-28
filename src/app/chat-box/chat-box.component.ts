import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../messages';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  @Input() messages: Message;

  constructor() {}

  ngOnInit() {

  }

}
