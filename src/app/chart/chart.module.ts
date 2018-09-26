import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

import { ChartComponent } from './chart.component';

@NgModule({
  imports: [CommonModule, ChartModule],
  declarations: [ChartComponent]
})
export class ChartsModule {}
