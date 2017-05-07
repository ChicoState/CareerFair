import {Injectable} from '@angular/core'; 
import {Http, Headers} from '@angular/http'; 
import 'rxjs/add/operator/map'; 


@Injectable() 
export class AdminService{ 
	constructor(private http:Http){ 
		console.log('AdminService Initialized...'); 
	}

	getCompanies(){ 
		return this.http.get('http://localhost:3000/api/companies').map(res => res.json()); 
	}
}
