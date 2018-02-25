import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalloutBox1Component } from './callout-box-1.component';

describe('CalloutBox1Component', () => {
  let component: CalloutBox1Component;
  let fixture: ComponentFixture<CalloutBox1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalloutBox1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalloutBox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
