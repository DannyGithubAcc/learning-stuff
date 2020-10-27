import { TestBed } from '@angular/core/testing';

import { HtmlElementsService } from './html-elements.service';

describe('HtmlElementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HtmlElementsService = TestBed.get(HtmlElementsService);
    expect(service).toBeTruthy();
  });
});
