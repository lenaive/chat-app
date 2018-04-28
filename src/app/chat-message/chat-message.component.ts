import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Message} from '../messages';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageComponent implements OnInit {

  @Input() message: Message;
  @Input() itsMe: string;

  isSelf: boolean;

  time;

  constructor() {
  }

  ngOnInit() {
    this.isSelf = this.message.username === 'Jorge';
    const currentTime = new Date(this.message.timestamp);
    const min = currentTime.getMinutes() < 10 ? `0${currentTime.getMinutes()}` : currentTime.getMinutes();
    const hour = currentTime.getHours();
    this.time = `${hour}:${min}`;
      const chatMessages =  document.querySelector('.chatMessages');
      chatMessages.scrollTop = chatMessages.scrollHeight + 200;

  }

}
