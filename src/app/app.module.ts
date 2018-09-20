import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { IconsComponent } from './icons/icons.component';
import { ChartComponent } from './chart/chart.component';

import { BlogModule } from './blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    IconsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    ReactiveFormsModule,
    ButtonModule,
    ChartModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
