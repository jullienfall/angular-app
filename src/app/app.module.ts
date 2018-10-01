import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { ChartsModule } from './chart/chart.module';
import { ProductsModule } from './products/products.module';
import { DatepickerModule } from './datepicker/datepicker.module';
import { SliderModule } from './slider/slider.module';
import { SwipersModule } from './swiper/swiper.module';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    ContactModule,
    ChartsModule,
    BlogModule,
    ProductsModule,
    DatepickerModule,
    SliderModule,
    SwipersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
