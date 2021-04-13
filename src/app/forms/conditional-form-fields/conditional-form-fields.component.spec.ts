import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalFormFieldsComponent } from './conditional-form-fields.component';

describe('ConditionalFormFieldsComponent', () => {
  let component: ConditionalFormFieldsComponent;
  let fixture: ComponentFixture<ConditionalFormFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalFormFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionalFormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
