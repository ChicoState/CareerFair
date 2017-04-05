import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload'; 

@Component({
	moduleId: module.id,
  selector: 'fileupload',
  templateUrl: 'fileupload.component.html',

})

export class FileUploadComponent  {  
	public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/upload'});	
}
