import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidationService } from './validation/validation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public customerForm: FormGroup;

  get addresses(): FormArray {
    return <FormArray>this.customerForm.get('addresses');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group(
        {
          email: ['', [Validators.required, ValidationService.emailValidator]],
          confirmEmail: ['', Validators.required]
        },
        { validator: ValidationService.emailMatchValidator }
      ),
      phone: ['', ValidationService.phoneValidator],
      notification: 'email',
      rating: ['', ValidationService.ratingValidator(1, 5)],
      sendCatalog: false,
      addresses: this.fb.array([this.buildAddress()])
    });

    // watching changes of notification
    const phoneControl = this.customerForm.get('phone');
    this.customerForm
      .get('notification')
      .valueChanges.subscribe(value => ValidationService.setNotification(phoneControl, value));
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

  // add addresses
  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressType: 'home',
      country: '',
      city: '',
      street: '',
      house: ''
    });
  }

  // submit form
  submit() {
    console.log(this.customerForm.value);
  }
}
