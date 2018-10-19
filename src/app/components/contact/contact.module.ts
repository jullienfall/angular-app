import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// validation
import { ValidationService } from './validation/validation.service';

// components
import { ContactComponent } from './contact.component';
import { ValidationMessagesComponent } from './validation/validation.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: 'contact', component: ContactComponent }])
  ],
  providers: [ValidationService],
  declarations: [ContactComponent, ValidationMessagesComponent]
})
export class ContactModule {}
