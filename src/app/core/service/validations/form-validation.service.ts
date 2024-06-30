import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ValidationTypes } from '../../enums/validation';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {

  constructor() { }


  checkInputValue(
    form: NgForm,
    formControlName: string,
    secondPasswordName: string | undefined = undefined
  ): ValidationTypes {
    let password = form.controls[formControlName];
    if (password == undefined || password.touched == false) {
      return ValidationTypes.passwordIsUndefined;
    }

    if (password.value == undefined || password.value.length == 0) {
      return ValidationTypes.empty;
    } else if (password?.errors?.['pattern']) {
      return ValidationTypes.patternValidation;
    }else if (password.value.length < 8) {
      return ValidationTypes.symbolsCount;
    }  else if (secondPasswordName != undefined) {
      let secondPassword = form.controls[secondPasswordName];
      let secondPasswordValidStatus = this.checkInputValue(
        form,
        secondPasswordName
      );
      if (secondPasswordValidStatus == ValidationTypes.ok) {
        if (password.value != secondPassword.value) {
          return ValidationTypes.passwordDontMatch;
        }
      }
    }

    return ValidationTypes.ok;
  }

  checkBaseValue(form: NgForm, controlName: string):ValidationTypes {
    let email = form.controls[controlName];

    if (email == undefined || email.touched == false)
      return ValidationTypes.ok

    if (email.value == undefined || email.value.length == 0)
      return ValidationTypes.empty

    else if (email.errors?.['pattern'])
      return ValidationTypes.patternValidation


      return ValidationTypes.ok

  }
}
