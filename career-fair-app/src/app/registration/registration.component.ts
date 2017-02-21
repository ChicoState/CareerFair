import { Component } from '@angular/core';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
 title = 'Registration';
 majors: string[];
 majorsSelected: string[];
 some: boolean;
 companies: Company[];
 submitted: boolean;
 constructor() {
     this.majors = [
         'eece',
         'csci',
         'math'
     ]
     this.majorsSelected = []
     this.companies = []
	 	 this.submitted = false;
}
 ToDisplay (major: string) {
    if (major == 'eece')
        return 'Electrical Engineering';
    else if(major == 'csci')
        return 'Computer Science';
    else if(major == 'math')
        return 'Math';
 }

 AddMajor(major: string) {
     for(var i = 0; i < this.majorsSelected.length; i++)
     {
         if(this.majorsSelected[i] == major)
         {
             this.majorsSelected.splice(i, 1);
             return;
         }
     }
    this.majorsSelected.push(major);
 }
 nameBoolean = false; 
 positionBoolean = false; 
 websiteBoolean = false;
 regexBoolean = false;

 AddCompany(name: string, position: string, website:string) {
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if(name.length == 0) 
    {
      this.nameBoolean = true; 
    }
		if(position.length == 0)
    {
			this.positionBoolean = true; 
    }
		else if(website.length == 0) 
    {
			this.websiteBoolean = true;
		}
		else if(!website.match(regex))
    {
      this.regexBoolean = true;
    }
		else
		{
			this.regexBoolean = false; 
			this.nameBoolean = false; 
      this.positionBoolean = false; 
			this.websiteBoolean = false;  
      
			let companyToAdd = new Company(name, position, website);
    	this.companies.push(companyToAdd);
	  }	
 }
	
 onSubmit()
 {
   this.submitted = true;
 }
 
 onNameChange(value) 
 {
   if(value.length == 0) 
   {
     this.nameBoolean=true;
   }
   else 
   {
     this.nameBoolean=false;
   }
 }

 onPositionChange(value) 
 {
   if(value.length == 0) 
   {
     this.positionBoolean=true;
   }
   else 
   {
     this.positionBoolean=false;
   }
 }

 onWebsiteChange(value) 
 {
   if(value.length == 0) 
   {
     this.websiteBoolean=true;
   }
   else 
   {
     this.websiteBoolean=false;
   }
 }



} // end of component

interface MajorsDesired {
    eece: boolean;
    csci: boolean;
    math: boolean;
}

class Company {
    name: string;
    position: string;
    website: string;

    constructor(name: string, position: string, website: string) {
        this.name = name;
        this.position = position;
        this.website = website;
    }
}
