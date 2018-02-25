import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHighchartsComponent } from './app-highcharts.component';

describe('AppHighchartsComponent', () => {
  let component: AppHighchartsComponent;
  let fixture: ComponentFixture<AppHighchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHighchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHighchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
