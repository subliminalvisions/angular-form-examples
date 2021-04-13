import { AbstractControl, ValidationErrors } from '@angular/forms';

export class EmailValidator {
    
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0){
            return {cannotContainSpace: true}
        }
        return null;
    }

    static emailValidTest(str): any {
            //  still No Workie 
        if (str.pristine) {
            return null;
        }
        const EMAIL_REGEXP = /^[0-9a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;
        str.markAsTouched();
        if (EMAIL_REGEXP.test(str.value)) {
            return null;
        }
        return {
            invalidEmail: true
        };
    }
        
    static EmailIsValid(email: AbstractControl) : ValidationErrors | null {
        const emailRegex = "^[0-9a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";

         const EMAIL_REGEXP = /^([0-9a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$)/;
        //  still No Workie 

         if (EMAIL_REGEXP.test(email.value)) {
            return null;
         }
         return {
            invalidEmail: true
         };

    }
}
