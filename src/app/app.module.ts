import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { FormsModule } from '@angular/forms';
import { MessagesService } from './messages.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    ChatFormComponent,
    ChatMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
