import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './modal.component';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [ModalComponent]
})
export class ModalModule {}
