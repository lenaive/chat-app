import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomComponent } from './chat-room.component';
import {MessagesService} from '../messages.service';
import {ChatMessageComponent} from '../chat-message/chat-message.component';
import {ChatFormComponent} from '../chat-form/chat-form.component';

describe('ChatRoomComponent', () => {
  let component: ChatRoomComponent;
  let fixture: ComponentFixture<ChatRoomComponent>;
  const expectedUsername = 'Jorge';
  const expectedMessage = {username: 'Jorge', message: 'Hello', timestamp: Date.now()};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomComponent, ChatMessageComponent, ChatFormComponent ],
      providers: [ MessagesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomComponent);
    component = fixture.componentInstance;
    component.userName = expectedUsername;
    component.messages = expectedMessage;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
