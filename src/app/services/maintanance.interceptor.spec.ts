import { TestBed } from '@angular/core/testing';

import { MaintananceInterceptor } from './maintanance.interceptor';

describe('MaintananceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MaintananceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MaintananceInterceptor = TestBed.inject(MaintananceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
