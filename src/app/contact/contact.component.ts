import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray
} from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  customerForm: FormGroup;
  firstNameMessage: string;
  lastNameMessage: string;
  emailMessage: string;
  confirmEmailMessage: string;
  emailGroupMessage: string;
  phoneMessage: string;
  ratingMessage: string;

  get addresses(): FormArray {
    return <FormArray>this.customerForm.get('addresses');
  }

  private validationMessages = {
    firstName: {
      required: 'Please enter your first name',
      minlength: 'The first name must be longer than 3 characters'
    },
    lastName: {
      required: 'Please enter your last name',
      maxlength: 'The first name must be not longer than 50 characters'
    },
    email: {
      required: 'Please enter your email address',
      pattern: 'Please provide valid email address'
    },
    confirmEmail: {
      required: 'Please confirm your email address'
    },
    emailGroup: {
      match: "Emails doesn't match"
    },
    phone: {
      required: 'Please provide your phone number',
      pattern: 'Your phone number must contain only digits'
    },
    rating: {
      range: 'Please rate your experience from 1 to 5'
    }
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // init group
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group(
        {
          email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+')]],
          confirmEmail: ['', Validators.required]
        },
        { validator: this.emailMatcher }
      ),
      phone: ['', Validators.pattern('^[0-9]*$')],
      notification: 'email',
      rating: ['', this.ratingRange(1, 5)],
      sendCatalog: false,
      addresses: this.fb.array([this.buildAddress()])
    });

    // watching changes of notification
    this.customerForm
      .get('notification')
      .valueChanges.subscribe(value => this.setNotification(value));

    // add error messages
    const firstNameControl = this.customerForm.get('firstName');
    const lastNameControl = this.customerForm.get('lastName');
    const emailControl = this.customerForm.get('emailGroup.email');
    const confirmEmailControl = this.customerForm.get('emailGroup.confirmEmail');
    const emailGroupControl = this.customerForm.get('emailGroup');
    const phoneControl = this.customerForm.get('phone');
    const ratingControl = this.customerForm.get('rating');

    firstNameControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => this.setMessage(firstNameControl, 'firstName'));

    lastNameControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => this.setMessage(lastNameControl, 'lastName'));

    emailControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => this.setMessage(emailControl, 'email'));

    confirmEmailControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => this.setMessage(confirmEmailControl, 'confirmEmail'));

    emailGroupControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => this.setMessage(emailGroupControl, 'emailGroup'));

    phoneControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => this.setMessage(phoneControl, 'phone'));

    ratingControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe(() => this.setMessage(ratingControl, 'rating'));
  }

  // test data
  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'Jack',
      lastName: 'White',
      emailGroup: { email: 'jack@gmail.com' },
      sendCatalog: false
    });
  }

  save() {
    console.log(this.customerForm);
    console.log(this.customerForm.value);
  }

  // add addresses
  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      country: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      house: ['', Validators.required]
    });
  }

  // add validation message
  setMessage(c: AbstractControl, prop: string) {
    if (prop === 'firstName') this.firstNameMessage = '';
    if (prop === 'lastName') this.lastNameMessage = '';
    if (prop === 'email') this.emailMessage = '';
    if (prop === 'confirmEmail') this.confirmEmailMessage = '';
    if (prop === 'emailGroup') this.emailGroupMessage = '';
    if (prop === 'phone') this.phoneMessage = '';
    if (prop === 'rating') this.ratingMessage = '';
    let message = '';

    if (((c.touched || c.dirty) && c.errors) || (c.errors && prop === 'phone')) {
      message = Object.keys(c.errors)
        .map(key => this.validationMessages[prop][key])
        .join('');

      if (prop === 'firstName') this.firstNameMessage = message;
      if (prop === 'lastName') this.lastNameMessage = message;
      if (prop === 'email') this.emailMessage = message;
      if (prop === 'confirmEmail') this.confirmEmailMessage = message;
      if (prop === 'emailGroup') this.emailGroupMessage = message;
      if (prop === 'phone') this.phoneMessage = message;
      if (prop === 'rating') this.ratingMessage = message;
    }
  }

  // add required phone field
  setNotification(notifyVia: string): void {
    let phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators([Validators.required, Validators.pattern('^[0-9]*$')]);
    } else {
      phoneControl.setValidators(Validators.pattern('^[0-9]*$'));
    }
    phoneControl.updateValueAndValidity();
  }

  // rating validation
  ratingRange(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      if (c.value === '') return null;
      if (isNaN(c.value) || c.value < min || c.value > max) {
        return { range: true };
      }
      return null;
    };
  }

  // check if emails match
  emailMatcher(c: AbstractControl) {
    let emailControl = c.get('email');
    let confirmControl = c.get('confirmEmail');
    if (emailControl.pristine || confirmControl.pristine) {
      return null;
    }
    if (emailControl.value === confirmControl.value) {
      return null;
    }
    return { match: true };
  }
}
