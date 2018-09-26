import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { BlogModule } from './blog/blog.module';
import { ContactModule } from './contact/contact.module';
import { ChartsModule } from './chart/chart.module';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NgbModule,
    ContactModule,
    ChartsModule,
    BlogModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
