import { Component } from '@angular/core';
import { CompaniesService } from './services/companies.service'; 
import { VolunteersService } from './services/volunteers.service'; 
import { AdminService } from './services/admin.service'; 


@Component({
	moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
	providers: [CompaniesService,AdminService, VolunteersService]

})
export class AppComponent  {  
	  title = 'Engineering Technical Career Fair';
  date = 'February 16, 2017 Thursday, 12:30 - 4:30';
  location = ' Bell Memorial Union';

  footerLine1 = 'MESA Programs, O\'Connell 114';
  footerLine2 = 'California State University, Chico';
  footerLine3 = '400 West First Street';
  footerLine4 = 'Chico, CA 95929-0100';
  footerLine5 = '(530) 898-4017';
}
