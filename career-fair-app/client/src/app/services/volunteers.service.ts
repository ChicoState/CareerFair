import {Injectable} from '@angular/core'; 
import {Http, Headers} from '@angular/http'; 
import 'rxjs/add/operator/map'; 


@Injectable() 
export class VolunteersService{ 
	constructor(private http:Http){ 
		console.log('VolunteersService Initialized...'); 
	}

	getVolunteers(){ 
		return this.http.get('http://localhost:3000/api/volunteers').map(res => res.json()); 
	}

	addVolunteer(newVolunteer: DBVolunteer){ 
		var headers = new Headers(); 
		headers.append('Content-Type', 'application/json'); 
		return this.http.post('http://localhost:3000/api/volunteer', JSON.stringify(newVolunteer), {headers: headers}).map(res => res.json()); 
	}
}

class DBVolunteer {
	firstName: 	string; 
	lastName: 	string; 
	email: 		string; 
	beginTime: 	string; 
	endTime: 	string;
	position: 	string;
}


