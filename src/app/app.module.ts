import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ServicesComponent } from './components/services/services.component';
import { PortFolioComponent } from './components/port-folio/port-folio.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioDetailsComponent } from './components/portfolio-details/portfolio-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMap } from '@angular/google-maps';
import { BackComponent } from './components/back/back.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ResumeComponent,
    ServicesComponent,
    PortFolioComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    PortfolioDetailsComponent,
    BackComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    GoogleMapsModule,
    BrowserAnimationsModule
  ],
  providers: [GoogleMap],
  bootstrap: [AppComponent]
})
export class AppModule { }
