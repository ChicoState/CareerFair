import { Component } from '@angular/core'; 
import { Company } from '../companies/companies'; 
@Component({ 
	selector: 'companyreg', 
	templateUrl: './companyreg.component.html' 
}) 

export class CompanyRegistrationComponent { 
	model = new Company("Company Name", "", "Position", "Website");
	companies = [];
	newCompany()
	{
		this.model=new Company("", "", "", ""); 
		this.companies.push(this.model);
	}
}


