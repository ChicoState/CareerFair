import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DownloadService {
	headers:Headers;
	bearer:string;
	constructor(public http: Http) {}

	/*
	getFile(url:string) { 
		this.bearer = 'Bearer' + localStorage.getItem('currentUser');
		this.headers = new Headers(); 
		this.headers.append('Authorization', this.bearer); 
		
		return this.http.get(url, {headers: this.headers});
	}
	*/
}
