import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ValidationService } from './validation/validation.service';

import { ContactComponent } from './contact.component';
import { ValidationMessagesComponent } from './validation/validation.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ValidationService],
  declarations: [ContactComponent, ValidationMessagesComponent]
})
export class ContactModule {}
