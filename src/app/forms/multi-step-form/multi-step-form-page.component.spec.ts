import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepFormPageComponent } from './multi-step-form-page.component';

describe('MultiStepFormPageComponent', () => {
  let component: MultiStepFormPageComponent;
  let fixture: ComponentFixture<MultiStepFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiStepFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
