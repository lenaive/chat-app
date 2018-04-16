import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input() user: string;
  @Input() message: string;

  time: string;
  isSelf: boolean;

  constructor() { }

  ngOnInit() {
    const currentTime = new Date();
    const min = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();
    const hour = currentTime.getHours();
    this.time = `${hour}:${min}`;
    this.isSelf = this.user === '';
    const chatMessages =  document.querySelector('.chatMessages');
    chatMessages.scrollTop = chatMessages.scrollHeight + 200;
  }

}
