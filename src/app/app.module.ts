import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { OurClientsComponent } from './home/our-clients/our-clients.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { CompanyServicesComponent } from './home/company-services/company-services.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContactComponent } from './home/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { NoFoundPageComponent } from './home/no-found-page/no-found-page.component';
import { MaintananceComponent } from './home/maintanance/maintanance.component';
import { MaintananceInterceptor } from './services/maintanance.interceptor';
import { ImagesComponent } from './home/images/images.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NavBarComponent,
    OurClientsComponent,
    TestimonialsComponent,
    CompanyServicesComponent,
    FooterComponent,
    ContactComponent,
    NoFoundPageComponent,
    MaintananceComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MaintananceInterceptor, multi: true }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
