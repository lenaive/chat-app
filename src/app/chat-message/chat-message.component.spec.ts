import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatMessageComponent } from './chat-message.component';

describe('ChatMessageComponent', () => {
  let component: ChatMessageComponent;
  let fixture: ComponentFixture<ChatMessageComponent>;
  const expectedMessage = {username: 'Jorge', message: 'Hello', timestamp: Date.now()};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMessageComponent);
    component = fixture.componentInstance;
    component.message = expectedMessage;
  });

  it('Should be Self', () => {
    component.isSelf = component.message.username === 'Jorge';
    expect(component.isSelf).toBe(true);
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
