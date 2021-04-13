import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from  '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { WhiteSpaceValidator } from './whitespace.validator';
import { EmailValidator } from './email.validator';

@Component({
  selector: 'app-basic-form-validators',
  templateUrl: './basic-form-validators.component.html',
  styleUrls: ['./basic-form-validators.component.less']
})
export class BasicFormValidatorsComponent implements OnInit {

  emailRegex = "^[0-9a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";

  newForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: new FormControl('', [
      Validators.required, 
      Validators.minLength(3), 
      WhiteSpaceValidator.cannotContainSpace,
      // EmailValidator.EmailIsValid,
      Validators.pattern(this.emailRegex),
    ]),
    age: [''],
    stackDetails: this.fb.group({
      stack: [''],
      experience: ['']
    }),
    address: this.fb.group({
        country: [''],
        city: ['']
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  get f(){
    return this.newForm.controls;
  }
  callingFunction() {
    console.log(this.newForm.value);
   }

}
