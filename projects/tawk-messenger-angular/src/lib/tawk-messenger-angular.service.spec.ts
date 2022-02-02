import { TestBed } from '@angular/core/testing';

import { TawkMessengerAngularService } from './tawk-messenger-angular.service';

describe('TawkMessengerAngularService', () => {
  let service: TawkMessengerAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TawkMessengerAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
