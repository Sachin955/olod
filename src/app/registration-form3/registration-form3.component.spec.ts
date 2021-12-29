import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationForm3Component } from './registration-form3.component';

describe('RegistrationForm3Component', () => {
  let component: RegistrationForm3Component;
  let fixture: ComponentFixture<RegistrationForm3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationForm3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
