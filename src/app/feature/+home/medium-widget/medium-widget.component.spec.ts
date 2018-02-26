import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumWidgetComponent } from './medium-widget.component';

describe('MediumWidgetComponent', () => {
  let component: MediumWidgetComponent;
  let fixture: ComponentFixture<MediumWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
