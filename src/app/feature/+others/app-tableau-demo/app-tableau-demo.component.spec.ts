import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTableauDemoComponent } from './app-tableau-demo.component';

describe('AppTableauDemoComponent', () => {
  let component: AppTableauDemoComponent;
  let fixture: ComponentFixture<AppTableauDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTableauDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTableauDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
