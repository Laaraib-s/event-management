import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreManaComponent } from './event-cre-mana.component';

describe('EventCreManaComponent', () => {
  let component: EventCreManaComponent;
  let fixture: ComponentFixture<EventCreManaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventCreManaComponent]
    });
    fixture = TestBed.createComponent(EventCreManaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
