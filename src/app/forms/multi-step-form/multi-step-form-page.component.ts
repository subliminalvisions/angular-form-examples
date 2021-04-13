import { Component, OnInit } from '@angular/core';
import { STEP_ITEMS } from './form-data';

@Component({
  selector: 'app-multi-step-form-page',
  templateUrl: './multi-step-form-page.component.html',
  styleUrls: ['./multi-step-form-page.component.less']
})
export class MultiStepFormPageComponent implements OnInit {

  formContent: any;
  formData: any;
  activeStepIndex: number;

  ngOnInit(): void {
    this.formContent = STEP_ITEMS;
    this.formData = {};
  }

  onFormSubmit(formData: any): void {
    this.formData = formData;

    // post form data here
    alert(JSON.stringify(this.formData));
  }


}
