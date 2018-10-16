import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// chart
import { ChartModule } from 'primeng/chart';

// component
import { ChartComponent } from './chart.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    RouterModule.forChild([
      {
        path: 'chart',
        component: ChartComponent
      }
    ])
  ],
  declarations: [ChartComponent]
})
export class ChartsModule {}
