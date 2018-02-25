import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExternalComponent } from './app-external.component';

describe('AppExternalComponent', () => {
  let component: AppExternalComponent;
  let fixture: ComponentFixture<AppExternalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppExternalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppExternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
