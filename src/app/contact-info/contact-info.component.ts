import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  @Input() contact: Array<object>;
  chatUrl: string;
  constructor() {
  }

  ngOnInit() {
    console.log(this.contact);
    this.chatUrl = encodeURI(`/chatRoom/${this.contact['name']['first']} ${this.contact['name']['last']}`);
  }

}
