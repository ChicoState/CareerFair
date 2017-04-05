import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing'; 
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';


// components we create
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header.component';
import { CompaniesComponent } from './companies/companies.component'; 
import { RegistrationComponent } from './registration/registration.component';
import { ParkingComponent } from './parking/parking.component'; 
import { VolunteerComponent } from './about/volunteer.component'; 
import { FileUploadComponent } from './fileupload/fileupload.component'; 



@NgModule({
  imports:      [ BrowserModule, 
									routing, 
									FormsModule, 	
									HttpModule ],
  declarations: [ AppComponent, 
									HomeComponent, 
									HeaderComponent, 
									CompaniesComponent, 
									RegistrationComponent, 
									ParkingComponent, 
									FileUploadComponent, 
									VolunteerComponent,
									FileSelectDirective ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
