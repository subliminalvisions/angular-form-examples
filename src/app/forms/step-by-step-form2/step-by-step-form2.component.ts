import { 
  Component, 
  OnInit, 
  ContentChildren, 
  QueryList, 
  AfterContentInit, 
  TemplateRef, 
  Input, 
  Output,
  EventEmitter
} from '@angular/core';
import { StepDirective } from './step.directive'

@Component({
  selector: 'app-step-by-step-form2',
  templateUrl: './step-by-step-form2.component.html',
  styleUrls: ['./step-by-step-form2.component.less']
})
export class StepByStepForm2Component implements OnInit, AfterContentInit {

  @Input() formData: any;
  @Input() startStep: number;
  @Output() nextAction = new EventEmitter<any>();
  @Output() finishAction = new EventEmitter<any>();
  @ContentChildren(TemplateRef) divs: QueryList<TemplateRef<StepDirective>>
  step = 0;
  currentView: TemplateRef<any>

  constructor() {
    this.nextStepHandle = this.nextStepHandle.bind(this)
    this.backStepHandle = this.backStepHandle.bind(this)
  }

  ngOnInit() {
    console.log(this.formData[this.step])
  }
  renderForm() {
    this.currentView = this.divs.toArray()[this.step]
  }
  ngAfterContentInit () {
    this.renderForm()
  }

  nextStepHandle(value){
    this.nextAction.emit(value)
    this.step++;
    this.renderForm()
  }
  backStepHandle() {
    this.step--;
    this.renderForm();
  }

}
