import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './about/volunteer.component';
import { CompaniesComponent } from './companies/companies.component';
import { RegistrationComponent } from './registration/registration.component';
// import parking component to add to route
import { ParkingComponent } from './parking/parking.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'volunteer',
    component: VolunteerComponent
  },
  {
      path: 'companies',
      component: CompaniesComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  // add a path for parkingComponent to the route 
  {
    path: 'parking',
    component: ParkingComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
