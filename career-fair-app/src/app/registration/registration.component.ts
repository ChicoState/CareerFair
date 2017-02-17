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

 constructor() {
     this.majors = [
         'eece',
         'csci',
         'math'
     ]
     this.majorsSelected = []
     this.companies = []
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

 AddCompany(name: string, position: string, website:string) {
    let companyToAdd = new Company(name, position, website);
    this.companies.push(companyToAdd);
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