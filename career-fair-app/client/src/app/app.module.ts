import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing'; 

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { CarouselModule, TimepickerModule, AlertModule, ModalModule,BsDropdownModule } from 'ngx-bootstrap';
import { PdfViewerComponent } from 'ng2-pdf-viewer'; 




// components we create
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { CompaniesComponent } from './companies/companies.component'; 
import { RegistrationComponent } from './registration/registration.component';
import { ParkingComponent } from './parking/parking.component'; 
import { FileUploadComponent } from './fileupload/fileupload.component'; 
import { FileDownloadComponent } from './filedownload/filedownload.component'; 

import { VolunteerComponent } from './volunteer/volunteer.component'; 
import { AdminComponent } from './admin/admin.component'; 
import { CarouselComponent } from './carousel/carousel.component'; 
import { CanvasComponent } from './canvas/canvas.component';

import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  imports:      [ 	BrowserModule, 
					routing, 
					FormsModule, 	
					HttpModule,
					AgmCoreModule.forRoot({ 
     									 apiKey: 'AIzaSyD5H2OAPwP5wAF3b0kN8OCfYJceS9mwq3k'
  											  }),
				 	CarouselModule.forRoot(),
					TimepickerModule.forRoot(),
					AlertModule.forRoot(),
					ModalModule.forRoot(),
					BsDropdownModule.forRoot(),
				],

  declarations: [ 	AppComponent, 
					HomeComponent, 
					HeaderComponent,
					FooterComponent, 
					CompaniesComponent, 
					RegistrationComponent, 
					PdfViewerComponent,
					ParkingComponent, 
					FileUploadComponent, 
					FileDownloadComponent,
					FileSelectDirective, 
					VolunteerComponent,
					AdminComponent,
					CarouselComponent,
					CanvasComponent
					],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
