import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-conditional-form-validators',
  templateUrl: './conditional-form-validators.component.html',
  styleUrls: ['./conditional-form-validators.component.less']
})
export class ConditionalFormValidatorsComponent implements OnInit {

  form: FormGroup;
  formSubmitted = false;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
    this.setUserCategoryValidators();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required]],
      username: [null, [Validators.required]],
      userCategory: ['employee'],
      institution: [null],
      company: [null, [Validators.required]],
      salary: [null, [Validators.required]],
    });
  }

  onSubmit(event) {
    event.preventDefault();
    this.formSubmitted = true;

    if (this.form.valid) {
      console.log(this.form.value); // Process your form
    }
  }

  setUserCategoryValidators() {
    const institutionControl = this.form.get('institution');
    const companyControl = this.form.get('company');
    const salaryControl = this.form.get('salary');

    this.form.get('userCategory').valueChanges
      .subscribe(userCategory => {

        if (userCategory === 'student') {
          institutionControl.setValidators([Validators.required]);
          companyControl.setValidators(null);
          salaryControl.setValidators(null);
        }

        if (userCategory === 'employee') {
          institutionControl.setValidators(null);
          companyControl.setValidators([Validators.required]);
          salaryControl.setValidators([Validators.required]);
        }

        institutionControl.updateValueAndValidity();
        companyControl.updateValueAndValidity();
        salaryControl.updateValueAndValidity();
      });
  }
  

}
