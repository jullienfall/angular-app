import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';

// modules
import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { ChartsModule } from './chart/chart.module';
import { ProductsModule } from './products/products.module';
import { DatepickerModule } from './datepicker/datepicker.module';
import { SliderModule } from './slider/slider.module';
import { SwipersModule } from './swiper/swiper.module';
import { ModalModule } from './modal/modal.module';
import { NgrxModule } from './ngrx/ngrx.module';
import { UserModule } from './login-in/user.module';

// in-memory-data.service
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data/in-memory-data.service';

// services
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  declarations: [AppComponent, FooterComponent, ErrorComponent],
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
    SwipersModule,
    ModalModule,
    NgrxModule,
    UserModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorHandlerService
    }
  ]
})
export class AppModule {}
