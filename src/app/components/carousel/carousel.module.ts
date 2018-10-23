import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SwipersModule, SwiperComponent } from './swiper';
import { SliderModule, SliderComponent } from './slider';
import { ModalModule, ModalComponent } from './modal';

@NgModule({
  imports: [
    CommonModule,
    SwipersModule,
    SliderModule,
    ModalModule,
    RouterModule.forChild([
      {
        path: 'carousel',
        children: [
          { path: 'slider', component: SliderComponent },
          { path: 'swiper', component: SwiperComponent },
          { path: 'modal', component: ModalComponent }
        ]
      }
    ])
  ],
  declarations: [],
  providers: []
})
export class CarouselModule {}
