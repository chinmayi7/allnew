import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import{ MatButtonModule} from '@angular/material/button';
import { CarouselHolderComponentComponent } from './carousel-holder-component/carousel-holder-component.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';

import { RouterModule, Routes} from '@angular/router';
import { WhoWeServeComponent } from './who-we-serve/who-we-serve.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent} from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { WavesModule } from 'angular-bootstrap-md';
import {  ButtonsModule } from 'angular-bootstrap-md';
import {  IconsModule } from 'angular-bootstrap-md';
import { FormsModule }   from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './sidebar/sidebar.component';
import{  MatSidenavModule} from '@angular/material/Sidenav';
import{   MatListModule} from '@angular/material/list';
import{  MatIconModule} from '@angular/material/icon';



const appRouter:Routes=[
  {path:'', component:CarouselHolderComponentComponent},
  {path:'whatwedo' , component:WhatWeDoComponent },
  {path:'whoweserve' , component:WhoWeServeComponent},
  {path:'aboutus' , component:AboutUsComponent},
  {path:'contactus' , component: ContactUsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselHolderComponentComponent,
    WhatWeDoComponent,
    WhoWeServeComponent,
    AboutUsComponent,
    ContactUsComponent,
    FooterComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRouter),
    WavesModule,
    ButtonsModule, 
    IconsModule,
    MatCardModule,
    MatIconModule, 
    MatSidenavModule, 
    MatListModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
