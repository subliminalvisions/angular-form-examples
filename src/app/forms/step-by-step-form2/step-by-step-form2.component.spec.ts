import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepByStepForm2Component } from './step-by-step-form2.component';

describe('StepByStepForm2Component', () => {
  let component: StepByStepForm2Component;
  let fixture: ComponentFixture<StepByStepForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepByStepForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepByStepForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
