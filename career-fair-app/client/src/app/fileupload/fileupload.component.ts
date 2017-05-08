import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload'; 
import { ResumesService } from '../services/resumes.service'

class Uploader {
  firstName: string;
  lastName: string;
  idNumber: string;
  constructor(firstName: string, lastName: string, idNumber: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = idNumber;
  }
}

@Component({
	moduleId: module.id,
  selector: 'fileupload',
  templateUrl: 'fileupload.component.html',
  styleUrls: ['./fileupload.component.css']

})

export class FileUploadComponent  {  
	public uploader:FileUploader = new FileUploader({url:'http://localhost:3000/upload'});
  public uploader_: Uploader = new Uploader("","","");
  newResume: DBResume;
  resumeService:ResumesService;

  constructor(private aResumeService: ResumesService) {
    this.resumeService = aResumeService;
    this.newResume= new DBResume();
    this.newResume.firstName = "";
    this.newResume.lastName = "";
    this.newResume.studentId = ""
  }

  validIdNumber(): boolean {
    if (this.uploader_.idNumber.length > 0) {
      var idPattern = /^\d{9}$/;
      var idRegex = new RegExp(idPattern);
      if (this.uploader_.idNumber.match(idRegex)) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  onSubmit() {
    var newResume = {
      firstName: this.newResume.firstName,
      lastName: this.newResume.lastName,
      studentId: this.newResume.studentId,
    }

    this.resumeService.addResume(newResume).subscribe(resume => {

    });
  }
  
}


export class DBResume {
	firstName: string; 
	lastName: string; 
	studentId: string;
}