import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDatePickerModule } from 'mydatepicker';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { ReactiveFormsModule } from '@angular/forms';

import { DatepickerComponent } from './datepicker.component';
import { DaterangepickerComponent } from './daterangepicker/daterangepicker.component';

@NgModule({
  imports: [CommonModule, MyDatePickerModule, ReactiveFormsModule, MyDateRangePickerModule],
  providers: [],
  declarations: [DatepickerComponent, DaterangepickerComponent]
})
export class DatepickerModule {}
