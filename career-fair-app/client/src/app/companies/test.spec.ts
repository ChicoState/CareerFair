import { Component } from '@angular/core'; 
import { CompaniesService } from './../services/companies.service'; 
import { Company } from './companies'; 


class MockCompany extends Company { 
	getAString(): string { 
		return "Hello Jeff"; 
	}
}
describe('Companies unit test', () => { 
	var company: Company; 
	
	beforeEach(() => { 
			company = new MockCompany();
	}); 
});

it('hope that function I created works', () => { 
	expect(company.getAString()).toBe("Hello Jeff");
});
