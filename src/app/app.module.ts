import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MessagesService } from './messages.service';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ContactsComponent } from './contacts/contacts.component';
import { routing } from './app.routing';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import {AngularFirestore} from 'angularfire2/firestore';
import { AddContactComponent } from './add-contact/add-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatFormComponent,
    ChatMessageComponent,
    ChatRoomComponent,
    ContactsComponent,
    ContactInfoComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    MessagesService,
    UsersService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
