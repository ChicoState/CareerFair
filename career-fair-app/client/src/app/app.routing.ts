import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component'; 
import { RegistrationComponent } from './registration/registration.component'; 
import { ParkingComponent } from './parking/parking.component'; 
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes: Routes = [ 
	{ 
		path: '', 
		component: HomeComponent
	}, 
	{
		path: 'companies', 
		component: CompaniesComponent
	}, 
	{
		path: 'registration', 
		component: RegistrationComponent
	}, 
	{
		path: 'parking', 
		component: ParkingComponent
	}, 
	{
		path: 'volunteer', 
		component: VolunteerComponent
	}, 
	{
		path: 'admin', 
		component: AdminComponent
	}
]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
