import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';
import {debounceTime} from 'rxjs/operators';
import {User} from '../user';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

    @Output() close = new EventEmitter<boolean>();
  addContact: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder) {
      this.addContact = this.formBuilder.group({
        name: ['', <any>Validators.required],
        nick: ['', <any>Validators.required],
        email: ['', [<any>Validators.required, <any>Validators.email]],
        address: ''
      });

      this.addContact.get('address').valueChanges.pipe(debounceTime(1000)).subscribe(() => {
          // Search address on gmaps api to get [longitude, latitude] params.
      });
  }



  ngOnInit() {
  }

  closeModal () {
    this.close.emit(false);
  }
    submitForm () {
        // if this.addContact.valid -> use User interface and save to array then show message 'ok' and return to contact view
    }

}
