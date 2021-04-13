import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalFormValidatorsComponent } from './conditional-form-validators.component';

describe('ConditionalFormValidatorsComponent', () => {
  let component: ConditionalFormValidatorsComponent;
  let fixture: ComponentFixture<ConditionalFormValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalFormValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalFormValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
