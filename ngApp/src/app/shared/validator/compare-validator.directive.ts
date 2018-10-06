import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[compare]',
  providers:[{provide:NG_VALIDATORS, useExisting:CompareValidatorDirective, multi:true}]
})
export class CompareValidatorDirective implements Validator{
 

  @Input('compare') controlNameToCompare: string;

  validate(control:AbstractControl): ValidationErrors {

    if(control.value === null || control.value.length === 0){
      return;  // don't  validate empty value
    }

    const controlToCompare = control.root.get(this.controlNameToCompare);
    if(controlToCompare){
      const subscription: Subscription = controlToCompare.valueChanges.subscribe(()=>{
        control.updateValueAndValidity();
        subscription.unsubscribe();
      });
    }
    return controlToCompare && controlToCompare.value !== control.value ? {'compare':true}:null;
  }

 

}


// https://www.youtube.com/watch?v=fj8M-3vEVLc