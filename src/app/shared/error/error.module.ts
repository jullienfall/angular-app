import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// service
import { ErrorHandlerService } from './error-handler.service';

//component
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: 'error', component: ErrorComponent }])],
  providers: [ErrorHandlerService],
  declarations: [ErrorComponent]
})
export class ErrorModule {}
