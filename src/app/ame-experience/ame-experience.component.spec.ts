import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeExperienceComponent } from './ame-experience.component';

describe('AmeExperienceComponent', () => {
  let component: AmeExperienceComponent;
  let fixture: ComponentFixture<AmeExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmeExperienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
