import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BlogModule,
    ContactModule,
    ChartsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
