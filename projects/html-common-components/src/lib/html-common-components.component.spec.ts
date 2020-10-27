import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCommonComponentsComponent } from './html-common-components.component';

describe('HtmlCommonComponentsComponent', () => {
  let component: HtmlCommonComponentsComponent;
  let fixture: ComponentFixture<HtmlCommonComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlCommonComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlCommonComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
