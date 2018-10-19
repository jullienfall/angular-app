import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// component
import { GojsComponent } from './gojs.component';

// service
import { GojsService } from './gojs.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([{ path: 'gojs', component: GojsComponent }])
  ],
  declarations: [GojsComponent],
  providers: [GojsService]
})
export class GojsModule {}
