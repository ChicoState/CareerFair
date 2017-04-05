import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component'; 
import { RegistrationComponent } from './registration/registration.component'; 
import { ParkingComponent } from './parking/parking.component'; 
import { VolunteerComponent } from './about/volunteer.component';
import { FileUploadComponent } from './fileupload/fileupload.component'; 


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
		path: 'fileupload', 
		component: FileUploadComponent
	}

]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
