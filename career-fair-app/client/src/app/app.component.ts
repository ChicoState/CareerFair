import { Component } from '@angular/core';
import { CompaniesService } from './services/companies.service'; 


@Component({
	moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
	providers: [CompaniesService]

})
export class AppComponent  {  
	  title = 'Engineering Technical Career Fair';
  date = 'February 16, 2017 Thursday, 12:30 - 4:30';
  location = ' Bell Memorial Union';

}
