import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { CarouselModule } from 'ng2-bootstrap/carousel';


//components we create
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
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
    AboutComponent,
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
    CarouselModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ]
})
export class AppModule { }
