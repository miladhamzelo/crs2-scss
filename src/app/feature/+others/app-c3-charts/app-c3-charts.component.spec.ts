import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppC3ChartsComponent } from './app-c3-charts.component';

describe('AppC3ChartsComponent', () => {
  let component: AppC3ChartsComponent;
  let fixture: ComponentFixture<AppC3ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppC3ChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppC3ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
