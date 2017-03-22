import { Component } from '@angular/core';

import { CompaniesService } from '../services/companies.service';
@Component({
	moduleId: module.id,
  selector: 'registration',
  templateUrl: 'registration.component.html'

})

export class RegistrationComponent  {
	title = 'Registration';
  majorOptions = MAJOR_OPTIONS; //majors to choose from
  positionOptions = POSITION_OPTIONS; //positions to choose from
  majorsSelected: string[]; //save majors selected, then pass them onto company
  positionsSelected: string[]; //save positions selected, then pass them onto company
  newCompany: Company;
  companiesInserted: Company[];

  //booleans used for validation

  /* None of these can be empty */
  contactNameBoolean: boolean;
  contactEmailBoolean: boolean;
  companyNameBoolean: boolean;
  contactPhoneNumberBoolean: boolean;
  companyWebsiteBoolean: boolean;
  companyDescriptionBoolean: boolean;

  /* Make sure at least 1 major, 1 position and 1 registration type were selected */
  majorsSelectedBoolean: boolean;
  positionsSelectedBoolean: boolean;
  registrationTypeBoolean: boolean;

  /* Works only if all else works */
  entireFormSubmitted: boolean;



  submitted: boolean;
  nameBoolean: boolean;
  positionBoolean: boolean;
  websiteBoolean: boolean;
  websiteRegexBoolean: boolean;

  constructor() {
    //no majors, positions, or companies selected yet
    this.majorsSelected = [];
    this.positionsSelected = [];
    this.companiesInserted = [];

    //initialize all booleans to false
    this.contactNameBoolean = false;
    this.contactEmailBoolean = false;
    this.companyNameBoolean = false;
    this.contactPhoneNumberBoolean = false;
    this.companyWebsiteBoolean = false;
    this.companyDescriptionBoolean = false;
    this.majorsSelectedBoolean = false;
    this.positionsSelectedBoolean = false;
    this.registrationTypeBoolean = false;
    this.entireFormSubmitted = false;

    //intialize empty company
    this.newCompany = new Company;
    this.newCompany.registrationType = "resumeBook";
  }

  /*
    We'll be saving majors as their abbreviations. But when displaying them to customers,
    we need full names. This function takes the abbreviation and returns the entire
    major's name
  */

  ToDisplay(displayMe: string) {
    /* Different Majors */
    if (displayMe == "cagd")
      return "Computer Animation and Game Development";
    else if (displayMe == "cimt")
      return "Concrete Industry Management";
    else if (displayMe == "cmgt")
      return "Construction Management";
    else if (displayMe == "cins")
      return "Computer Information Systems";
    else if (displayMe == "civl")
      return "Civil Engineering";
    else if (displayMe == 'csci')
      return 'Computer Science';
    else if (displayMe == 'eece')
      return 'Electrical Engineering';
    else if (displayMe == "meca")
      return "Mechatronic Engineering";
    else if (displayMe == "mech")
      return "Mechanical Engineering";
    else if (displayMe == "mins")
      return "Management Information Systems";
    else if (displayMe == "smfg")
      return "Sustainable Manufacturing";

    /* Position types */
    else if (displayMe == "co_op")
      return "CO OP";
    else if (displayMe == "full_time")
      return "Full Time Position";
    else if (displayMe == "summer_internship")
      return "Summer Internship";
  }

  /*
    When companies check a major, we add that major to their majorsSelected array. If 
    they're checking it again (therefore unchecking it), we remove it from majorsSelected.
    Function is called every time a major is checked or unchecked
  */

  AddMajor(major: string) {
    for (var i = 0; i < this.majorsSelected.length; i++) {
      if (this.majorsSelected[i] == major) {
        this.majorsSelected.splice(i, 1);
        return;
      }
    }
    this.majorsSelected.push(major);
  }

  AddPosition(position: string) {
    for (var i = 0; i < this.positionsSelected.length; i++) {
      if (this.positionsSelected[i] == position) {
        this.positionsSelected.splice(i, 1);
        return;
      }
    }
    this.positionsSelected.push(position);
  }

  OnSumbit() {
    this.companiesInserted.push(this.newCompany);
  }

  /*
    This function is called when they hit submit on the registration form. AddCompany creates that
    company and adds it to companies array.
  */

  /*
    AddCompany(name: string, position: string, website: string) {
      var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
      var regex = new RegExp(expression);
      if (name.length == 0) {
        this.nameBoolean = true;
      }
      if (position.length == 0) {
        this.positionBoolean = true;
      }
      else if (website.length == 0) {
        this.websiteBoolean = true;
      }
      else if (!website.match(regex)) {
        this.websiteRegexBoolean = true;
      }
      else {
        this.websiteRegexBoolean = false;
        this.nameBoolean = false;
        this.positionBoolean = false;
        this.websiteBoolean = false;
        let companyToAdd = new Company(name, position, this.transformWebsite(website));
        this.companies.push(companyToAdd);
      }
    }
  */
  transformWebsite(website: string) {
    if (website.includes("http://", 0) || website.includes("https://", 0)) {
      return website;
    }
    else {
      return "https://" + website;
    }
  }
	onSubmit() {
		/*
		var newCompany = { 
			companyName: this.title, 
			contactEmail: "a@a.com", 
			contactPhoneNumber: "18001111111", 
			companyWebsite: "www.company.com", 
			companyDescription: "Description of company", 
			CAGD: false, 
			CIM: false, 
			CM: false, 
			CE: false, 
			CS: false, 	
			EE: false, 
			ME: false, 
			MCE: false, 
			MIS: false, 	
			SM: false, 
			COOP: false, 
			fullTime: false, 
			summerIntern: false, 
			resumeBook: false, 
			tableBook: false, 
			tableAndResume: false 
		}
		this.companiesService.addCompany(newCompany).subscribe(company => { 
			this.company.push(company); 
		}); 
		*/
    this.submitted = true;
  }
/*
  onNameChange(value) {
    if (value.length == 0) {
      this.nameBoolean = true;
    }
    else {
      this.nameBoolean = false;
    }
  }

  onPositionChange(value) {
    if (value.length == 0) {
      this.positionBoolean = true;
    }
    else {
      this.positionBoolean = false;
    }
  }

  onWebsiteChange(value) {
    if (value.length == 0) {
      this.websiteBoolean = true;
    }
    else {
      this.websiteBoolean = false;
    }
  }
	*/
} // end of component

class Company {
  contactName: string;
  contactEmail: string;
  companyName: string;
  contactPhoneNumber: string;
  companyWebsite: string;
  companyDescription: string;
  majorsSelected: string[];
  positionsSelected: string[];
  registrationType: string;

/*
  constructor(contactName: string, contactEmail: string, companyName: string, contactPhoneNumber: string,
    companyWebsite: string, companyDescription: string, majorsSelected: string[], positionsSelected: string[],
    registrationType: string) {
    this.contactName = contactName;
    this.contactEmail = contactEmail;
    this.companyName = companyName;
    this.contactPhoneNumber = contactPhoneNumber;
    this.companyWebsite = companyWebsite;
    this.companyDescription = companyDescription;
    this.majorsSelected = majorsSelected;
    this.positionsSelected = positionsSelected;
    this.registrationType = registrationType;
  }
  */
}

export const MAJOR_OPTIONS: string[] = [
  //engineering/tech i could think of..KEEP IN ALPHABETICAL ORDER
  "cagd", //computer animation and game development 
  "cimt", //concrete industry management
  "cmgt", //construction management
  "cins",
  "civl",
  "csci",
  "eece",
  "meca", //mechatronic
  "mech", //mechicanal
  "mins",
  "smfg", //sustainable manufacturing
];

export const POSITION_OPTIONS: string[] = [
  "co_op",
  "full_time",
  "summer_internship",
];

