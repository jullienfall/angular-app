import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// component
import { ModalComponent } from './modal.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([{ path: 'modal', component: ModalComponent }])
  ],
  declarations: [ModalComponent]
})
export class ModalModule {}
