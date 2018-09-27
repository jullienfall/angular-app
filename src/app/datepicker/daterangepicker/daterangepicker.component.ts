import { Component, OnInit } from '@angular/core';
import { IMyDrpOptions } from 'mydaterangepicker';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-daterangepicker',
  templateUrl: './daterangepicker.component.html',
  styleUrls: ['./daterangepicker.component.css']
})
export class DaterangepickerComponent implements OnInit {
  myDateRangePickerOptions: IMyDrpOptions = {
    width: '250px',
    dateFormat: 'dd.mm.yyyy',
    showClearDateRangeBtn: false,
    disableDateRanges: [
      {
        beginDate: { year: 2018, month: 9, day: 1 },
        endDate: { year: 2018, month: 9, day: 10 }
      }
    ]
  };

  private myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      myDateRange: ['', Validators.required]
    });
  }
}
