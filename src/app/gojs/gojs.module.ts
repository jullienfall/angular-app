import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GojsComponent } from './gojs.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: 'gojs', component: GojsComponent }])],
  declarations: [GojsComponent]
})
export class GojsModule {}
