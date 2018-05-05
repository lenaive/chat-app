import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Array<object>;
  modalIsVisible = false;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
      this.userService.getContacts().subscribe(data => { this.contacts = data['results']; } );
  }

  toggleModal () {
    this.modalIsVisible = !this.modalIsVisible;
  }

}
