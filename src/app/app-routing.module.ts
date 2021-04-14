import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormValidatorsComponent } from './forms/basic-form-validators/basic-form-validators.component';
import { MultiStepFormPageComponent } from './forms/multi-step-form/multi-step-form-page.component';
import { ConditionalFormFieldsComponent } from './forms/conditional-form-fields/conditional-form-fields.component';
import { ConditionalFormValidatorsComponent } from './forms/conditional-form-validators/conditional-form-validators.component';
import { StepByStepForm2Component } from './forms/step-by-step-form2/step-by-step-form2.component';

const routes: Routes = [
  
  {path:'basic-form-validators', component: BasicFormValidatorsComponent},
  {path:'multi-step-form', component: MultiStepFormPageComponent},
  {path:'step-by-step-form2', component: StepByStepForm2Component},
  {path:'conditional-form', component: ConditionalFormFieldsComponent},
  {path:'conditional-validation', component: ConditionalFormValidatorsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
