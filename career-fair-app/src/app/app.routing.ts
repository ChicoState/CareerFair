import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompaniesComponent } from './companies/companies.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
      path: 'companies',
      component: CompaniesComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
