import {Injectable} from '@angular/core'; 
import {Http, Headers} from '@angular/http'; 
import 'rxjs/add/operator/map'; 


@Injectable() 
export class CompaniesService{ 
	constructor(private http:Http){ 
		console.log('CompaniesService Initialized...'); 
	}

	getCompanies(){ 
		return this.http.get('http://localhost:3000/api/companies').map(res => res.json()); 
	}

	addCompany(newCompany: DBCompany){ 
		var headers = new Headers(); 
		headers.append('Content-Type', 'application/json'); 
		return this.http.post('http://localhost:3000/api/company', JSON.stringify(newCompany), {headers: headers}).map(res => res.json()); 
	}
}

class DBCompany {
	contactName: 			string;
	contactEmail: 			string;
	billingContactName: 	string;
	billingEmail: 			string;
	companyName: 			string;
	contactPhoneNumber: 	string;
	companyWebsite: 		string;
	companyDescription: 	string;
	registrationType: 		string; 
	desiredPositions: 		string; 
	desiredMajors: 			string; 
	moneyOwed: 				number; 
	confirmation: 			string; 
}


