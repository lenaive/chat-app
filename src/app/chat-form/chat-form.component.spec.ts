import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFormComponent } from './chat-form.component';
import {MessagesService} from '../messages.service';

describe('ChatFormComponent', () => {
  let component: ChatFormComponent;
  let fixture: ComponentFixture<ChatFormComponent>;
  const expectedUser = 'Jorge';
  const expectedMessage = 'Hola';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFormComponent ],
      providers: [ MessagesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFormComponent);
    component = fixture.componentInstance;
    component.user = expectedUser;
    component.message = expectedMessage;
    fixture.detectChanges();
  });

  fit('Should recieve user', () => {
    expect(component.user).toBe(expectedUser);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
