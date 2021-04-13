import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formStepTitle'
})
export class FormStepTitlePipe implements PipeTransform {
  transform(title: string): string {
    const result = title.replace(/([A-Z])/g, ' $1');
    const finalResult = result.charAt(0)
      .toUpperCase() + result.slice(1);

    return finalResult;
  }
}
