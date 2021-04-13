import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormValidatorsComponent } from './basic-form-validators.component';

describe('BasicFormValidatorsComponent', () => {
  let component: BasicFormValidatorsComponent;
  let fixture: ComponentFixture<BasicFormValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicFormValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
