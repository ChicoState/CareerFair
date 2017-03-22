import { Component } from '@angular/core';
import { CompaniesService } from './../services/companies.service'; 
import { Company } from './companies'; 

@Component({
	moduleId: module.id,
  selector: 'companies',
  templateUrl: 'companies.component.html',

})
export class CompaniesComponent  {  
	companies: Company[]; 
	
	constructor(private companiesService: CompaniesService) { 
		this.companiesService.getCompanies().subscribe(companies => {
			this.companies = companies;
		}); 
	}
}

