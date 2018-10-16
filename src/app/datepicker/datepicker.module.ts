import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// datapicker
import { MyDatePickerModule } from 'mydatepicker';
import { MyDateRangePickerModule } from 'mydaterangepicker';

// components
import { DatepickerComponent } from './datepicker.component';
import { DaterangepickerComponent } from './daterangepicker/daterangepicker.component';

@NgModule({
  imports: [
    CommonModule,
    MyDatePickerModule,
    ReactiveFormsModule,
    MyDateRangePickerModule,
    RouterModule.forChild([{ path: 'datepicker', component: DatepickerComponent }])
  ],
  providers: [],
  declarations: [DatepickerComponent, DaterangepickerComponent]
})
export class DatepickerModule {}
