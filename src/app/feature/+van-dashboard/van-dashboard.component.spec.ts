import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanDashboardComponent } from './van-dashboard.component';

describe('VanDashboardComponent', () => {
  let component: VanDashboardComponent;
  let fixture: ComponentFixture<VanDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
