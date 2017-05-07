import { Component } from '@angular/core'; 
import {Http, Response, URLSearchParams} from '@angular/http'; 
import 'rxjs/add/operator/map'; 


@Component({
	moduleId: module.id,
  selector: 'download',
  templateUrl: 'filedownload.component.html',

})

export class FileDownloadComponent { 
	constructor(private http:Http){ 
		// window.location.href = 'http://localhost:3000/download';	
	}

}
