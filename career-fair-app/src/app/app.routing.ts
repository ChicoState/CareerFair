import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyRegistrationComponent } from './companyreg/companyreg.component';

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
		path: 'companyreg', 
		component: CompanyRegistrationComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
