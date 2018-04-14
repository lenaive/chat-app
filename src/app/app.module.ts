import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';


@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    ChatFormComponent,
    ChatMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
