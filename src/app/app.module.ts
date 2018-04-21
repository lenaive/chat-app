import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { FormsModule } from '@angular/forms';
import { MessagesService } from './messages.service';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ContactsComponent } from './contacts/contacts.component';
import { routing } from './app.routing';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import {UsersService} from './users.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    ChatFormComponent,
    ChatMessageComponent,
    ChatRoomComponent,
    ContactsComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    MessagesService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
