import { TestBed } from '@angular/core/testing';

import { TawkMessengerAngular } from './tawk-messenger-angular';

describe('TawkMessengerAngular', () => {
  let service: TawkMessengerAngular;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TawkMessengerAngular);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
