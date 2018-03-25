import { ProjekatComponent } from './projekti/projekat/projekat.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgwWowModule } from 'ngx-wow';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { ProjektiComponent } from './projekti/projekti.component';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import 'mousetrap';
import * as $ from 'jquery';
import { ModalGalleryModule } from 'angular-modal-gallery';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { BsDropdownModule } from 'ngx-bootstrap';
import { BiografijaComponent } from './biografija/biografija.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProjektiComponent,
    ProjekatComponent,
    BiografijaComponent
],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    NgwWowModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule,
    ModalGalleryModule.forRoot(),
    ScrollToModule.forRoot(),
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    LayoutModule,
    BsDropdownModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
