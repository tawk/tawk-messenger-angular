import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TawkMessengerAngularComponent } from './tawk-messenger-angular.component';

describe('TawkMessengerAngularComponent', () => {
  let component: TawkMessengerAngularComponent;
  let fixture: ComponentFixture<TawkMessengerAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TawkMessengerAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TawkMessengerAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
