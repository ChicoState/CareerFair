import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing'; 
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { CarouselModule, TimepickerModule, AlertModule, ModalModule,BsDropdownModule } from 'ngx-bootstrap';




// components we create
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header.component';
import { CompaniesComponent } from './companies/companies.component'; 
import { RegistrationComponent } from './registration/registration.component';
import { ParkingComponent } from './parking/parking.component'; 
import { VolunteerComponent } from './volunteer/volunteer.component'; 
import { AdminComponent } from './admin/admin.component'; 
import { CarouselComponent } from './carousel/carousel.component'; 





@NgModule({
  imports:      [ 	BrowserModule, 
					routing, 
					FormsModule, 	
					HttpModule,
				 	CarouselModule.forRoot(),
					TimepickerModule.forRoot(),
					AlertModule.forRoot(),
					ModalModule.forRoot(),
					BsDropdownModule.forRoot(),
				],

  declarations: [ 	AppComponent, 
					HomeComponent, 
					HeaderComponent, 
					CompaniesComponent, 
					RegistrationComponent, 
					ParkingComponent, 
					VolunteerComponent,
					AdminComponent,
					CarouselComponent,
					],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
