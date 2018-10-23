import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './components/footer';
import { BlogModule } from './components/blog';
import { ContactModule } from './components/contact';
import { ChartsModule } from './components/chart';
import { ProductsModule } from './components/products';
import { DatepickerModule } from './components/datepicker';
import { CarouselModule } from './components/carousel/carousel.module';
import { NgrxModule } from './components/ngrx';
import { UserModule } from './login-in';
// import { GojsModule } from './gojs';
import { GojsModule } from 'demolib-gojs';

// routing
import { AppRoutingModule } from './app-routing.module';

// error handler
import { ErrorHandlerService, ErrorModule } from './shared/error';

// in-memory-data.service
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data/in-memory-data.service';

@NgModule({
  declarations: [AppComponent, FooterComponent, HomeComponent, MenuComponent],
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
    CarouselModule,
    NgrxModule,
    UserModule,
    GojsModule,
    ErrorModule,
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
