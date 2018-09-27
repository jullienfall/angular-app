import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  public myDatePickerOptions: IMyDpOptions = {
    width: '250px',
    dateFormat: 'dd.mm.yyyy',
    showClearDateBtn: false,
    highlightDates: [{ year: 2018, month: 10, day: 16 }, { year: 2018, month: 10, day: 17 }]
  };

  public myForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      myDate: ['', Validators.required]
    });

    this.setDisable();
  }

  // set disable till today
  setDisable() {
    let today = this.todayDate();
    today.day -= 1;
    let copy = this.getCopyOfOptions();
    copy.disableUntil = today;
    this.myDatePickerOptions = copy;
  }

  // get today's date
  todayDate() {
    let date = new Date();
    let myDate = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
    return myDate;
  }

  getCopyOfOptions(): IMyDpOptions {
    return JSON.parse(JSON.stringify(this.myDatePickerOptions));
  }

  setDateRange(): void {
    let date = new Date();
    this.myForm.patchValue({
      myDateRange: {
        beginDate: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        },
        endDate: {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        }
      }
    });
  }
}
