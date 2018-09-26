import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable()
export class ValidationService {
  constructor() {}

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: 'This field can not be left blank',
      minlength: 'The field must be longer than 3 characters',
      maxlength: 'The first name must be not longer than 50 characters',
      emailValidator: 'Please provide valid email address',
      emailMatchValidator: "Emails doesn't match",
      phoneValidator: 'Your phone number must contain only digits',
      ratingValidator: 'Please rate your experience from 1 to 5'
    };

    return config[validatorName];
  }

  // email validator
  static emailValidator(control) {
    const redexp = '[a-z0-9._%+-]+@[a-z0-9.-]+';
    if (control.value.match(redexp)) {
      return null;
    } else {
      return { emailValidator: true };
    }
  }

  // phone validation
  static phoneValidator(control) {
    const redexp = '^[0-9]*$';
    if (control.value.match(redexp)) {
      return null;
    } else {
      return { phoneValidator: true };
    }
  }

  // rating validation
  static ratingValidator(min: number, max: number) {
    return (control): { [key: string]: boolean } | null => {
      if (control.value === '') return null;
      if (isNaN(control.value) || control.value < min || control.value > max) {
        return { ratingValidator: true };
      }
      return null;
    };
  }

  // emails match validator
  static emailMatchValidator(control) {
    let emailControl = control.get('email');
    let confirmControl = control.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
      return null;
    }
    if (emailControl.value === confirmControl.value) {
      return null;
    }
    return { emailMatchValidator: true };
  }

  // add required validation to phone field
  static setNotification(control, notifyVia: string): void {
    if (notifyVia === 'text') {
      control.setValidators([Validators.required, ValidationService.phoneValidator]);
    } else {
      control.setValidators(ValidationService.phoneValidator);
    }
    control.updateValueAndValidity();
  }
}
