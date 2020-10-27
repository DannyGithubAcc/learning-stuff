import { TestBed } from '@angular/core/testing';

import { HtmlCommonComponentsService } from './html-common-components.service';

describe('HtmlCommonComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtmlCommonComponentsService = TestBed.get(HtmlCommonComponentsService);
    expect(service).toBeTruthy();
  });
});
