import {Injectable} from '@angular/core'; 
import {Http, Headers} from '@angular/http'; 
import 'rxjs/add/operator/map'; 


@Injectable() 
export class ResumesService{ 
	constructor(private http:Http){ 
		console.log('ResumesService Initialized...'); 
	}

	getResumes(){ 
		return this.http.get('http://localhost:3000/api/resumes').map(res => res.json()); 
	}

	addResume(newResume: DBResume){ 
		var headers = new Headers(); 
		headers.append('Content-Type', 'application/json'); 
		return this.http.post('http://localhost:3000/api/resume', JSON.stringify(newResume), {headers: headers}).map(res => res.json()); 
	}
}

class DBResume {
	firstName: string; 
	lastName: string; 
	studentId: string;
}


