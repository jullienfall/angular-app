import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// swiper
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

// component
import { SwiperComponent } from './swiper.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule.forChild([{ path: 'swiper', component: SwiperComponent }])
  ],
  declarations: [SwiperComponent],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class SwipersModule {}
