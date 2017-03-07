import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { CarouselModule } from 'ng2-bootstrap/carousel';
import { DropdownModule } from 'ng2-dropdown/';


//components we create
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './about/volunteer.component';
import { CompaniesComponent } from './companies/companies.component';
import { RegistrationComponent } from './registration/registration.component'
  //import ParkingComponent so that routing can use it
import { ParkingComponent } from './parking/parking.component'
//import HeaderComponent so that routing can use it
import { HeaderComponent } from './layout'
import { FooterComponent } from './layout'
import { CarouselComponent } from './carousel/carousel.component'




@NgModule({
  declarations: [ //components we create
    AppComponent,
    HomeComponent,
    VolunteerComponent,
    CompaniesComponent,
    RegistrationComponent,
    //Add ParkingComponent to components we can use
    ParkingComponent,
    //Add HeaderComponent to components we can use
    HeaderComponent,
    //Add FooterComponent to components we can use
    FooterComponent,
    CarouselComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CarouselModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ]
})
export class AppModule { }
