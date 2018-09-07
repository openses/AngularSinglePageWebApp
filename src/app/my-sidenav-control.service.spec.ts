import { TestBed, inject } from '@angular/core/testing';

import { MySidenavControlService } from './my-sidenav-control.service';

describe('MySidenavControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySidenavControlService]
    });
  });

  it('should be created', inject([MySidenavControlService], (service: MySidenavControlService) => {
    expect(service).toBeTruthy();
  }));
});
