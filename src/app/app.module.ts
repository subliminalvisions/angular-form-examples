import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BasicFormValidatorsComponent } from './forms/basic-form-validators/basic-form-validators.component';
import { ConditionalFormValidatorsComponent } from './forms/conditional-form-validators/conditional-form-validators.component';
import { ConditionalFormFieldsComponent } from './forms/conditional-form-fields/conditional-form-fields.component';

import { FormStepTitlePipe } from './forms/multi-step-form//form-step-title.pipe';

import { MultiStepFormComponent } from './forms/multi-step-form/multi-step-form.component';
import { MultiStepFormPageComponent } from './forms/multi-step-form/multi-step-form-page.component';

import { StepDirective } from './forms/step-by-step-form2/step.directive';
import { StepByStepForm2Component } from './forms/step-by-step-form2/step-by-step-form2.component';
import { StepSelectorComponent } from './forms/step-by-step-form2/step-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    BasicFormValidatorsComponent,
    ConditionalFormValidatorsComponent,
    ConditionalFormFieldsComponent,
    MultiStepFormComponent,
    FormStepTitlePipe,
    MultiStepFormPageComponent,
    StepByStepForm2Component,
    StepSelectorComponent,
    StepDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
