import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingFirstNewsletterComponent } from './sending-first-newsletter.component';

describe('SendingFirstNewsletterComponent', () => {
  let component: SendingFirstNewsletterComponent;
  let fixture: ComponentFixture<SendingFirstNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingFirstNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingFirstNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
