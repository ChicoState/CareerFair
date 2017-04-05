import { Component } from '@angular/core';
import { CompaniesService } from './../services/companies.service'; 

@Component({
	moduleId: module.id,
  selector: 'registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css']
})

export class RegistrationComponent {

  title = 'Registration';
  majorOptions = MAJOR_OPTIONS; //majors to choose from
  positionOptions = POSITION_OPTIONS; //positions to choose from
  newCompany: Company;
  companiesInserted: Company[];
	companyService: CompaniesService; 

  /* Make sure at least 1 major, 1 position and 1 registration type were selected */
  majorsSelectedBoolean: boolean;
  positionsSelectedBoolean: boolean;
  registrationTypeBoolean: boolean;

  entireFormSubmitted: boolean;


  submitted: boolean;

	/*
	 * The constructor is used to initialize newCompany
	 * newCompany has many attributes used in .html file
	 * for everytime an attribute in .html file isnt found
	 * it references newCompany to see if its there.
	
	 * Anything with a Boolean handles error checking for multi-
	 * selecting UI's
	 */
	constructor(private aCompaniesService: CompaniesService) { 
    this.companiesInserted = [];
		this.companyService = aCompaniesService;
    this.majorsSelectedBoolean = false;
    this.positionsSelectedBoolean = false;
    this.entireFormSubmitted = false;

		this.newCompany = new Company;
		this.newCompany.positionsSelected = []; 
		this.newCompany.majorsSelected = []; 
		this.newCompany.registrationType = "resumeBook"; 
	}

	/*
    We'll be saving majors as their abbreviations. But when displaying them to customers,
    we need full names. This function takes the abbreviation and returns the entire
    major's name
  */

  getDate() {
    let date = new Date();
    let dateNumber = "";
    let monthStr = "";
    if(date.getDate() < 10) {
      dateNumber = '0' + date.getDate().toString();
    }
    let month = date.getMonth() + 1; //because january is 0
    if(month < 10) {
      monthStr = "0" + month.toString();
    }
    
    return monthStr + dateNumber + date.getFullYear().toString() + date.getHours().toString() + 
      date.getMinutes().toString() + date.getSeconds().toString() + date.getMilliseconds().toString();
  }

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
	 * The AddMajor(major: string)  is used to initialize 
	 * majorOptions
	 * 	  
	 * 
	 */
	
  AddMajor(major: string) {
    for (var i = 0; i < this.newCompany.majorsSelected.length; i++) {
      if (this.newCompany.majorsSelected[i] == major) {
        this.newCompany.majorsSelected.splice(i, 1);
        if(this.newCompany.majorsSelected.length > 0) {
          this.majorsSelectedBoolean = true;
        }
        else {
          this.majorsSelectedBoolean = false;
        }
        return;
      }
    }
    this.newCompany.majorsSelected.push(major);
  }


	/*
	 * The AddPosition(position: string)  is used to initialize 
	 * positionsSelected
	 * 	  
	 * 
	 */
	
	AddPosition(position: string) {
    for (var i = 0; i < this.newCompany.positionsSelected.length; i++) {
      if (this.newCompany.positionsSelected[i] == position) {
        this.newCompany.positionsSelected.splice(i, 1);
        if(this.newCompany.positionsSelected.length > 0 ) {
          this.positionsSelectedBoolean = true;
        }
        else {
          this.positionsSelectedBoolean = false;
        }
        return;
      }
    }
    this.newCompany.positionsSelected.push(position);
  }

  convertToSingleString(toConvert: string[]) {
    let toReturn: string = "";
    for(var i = 0; i < toConvert.length; i++) {
      if(i == 0) {
        toReturn = toReturn + toConvert[i];
      }
      else {
        toReturn = toReturn + ", " + toConvert[i];
      }
    }
    return toReturn;
  }

  calculateMoneyOwed(registrationType: string) {
    if(registrationType == "resumeBook") {
      this.newCompany.moneyOwed = 150;
    }
    else if(registrationType == "table") {
      this.newCompany.moneyOwed = 450;
    }
    else if(registrationType == "resumeBookAndTable") {
      this.newCompany.moneyOwed = 550;
    }
  }


 	onSubmit() {
    this.submitted = true;
    this.calculateMoneyOwed(this.newCompany.registrationType);
    this.newCompany.positionsTest = this.convertToSingleString(this.newCompany.positionsSelected);
    this.newCompany.majorsTest = this.convertToSingleString(this.newCompany.majorsSelected);
    this.newCompany.confirmation = this.getDate();
    //this.calculateMoneyOwed(this.newCompany.registrationType);
		
    var newCompany = { 
			contactName: this.newCompany.contactName, 
			contactEmail: this.newCompany.contactEmail, 
			companyName: this.newCompany.companyName,
       //make this a string. ill make sure its valid later on
			contactPhoneNumber: this.newCompany.contactPhoneNumber,
			companyWebsite: this.newCompany.companyWebsite,
			companyDescription: this.newCompany.companyDescription,
      //frank added the following
      desiredPositions: this.newCompany.positionsTest,
      desiredMajors: this.newCompany.majorsTest,
      moneyOwed: this.newCompany.moneyOwed,
      confirmation: this.newCompany.confirmation,
		}
    
		//this.companyService.addCompany(newCompany).subscribe(company => { 
		
  	//});  
  }




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

  moneyOwed: number;
  positionsTest: string;
  majorsTest: string;
  confirmation: string; //current time and date converted to string

}

class DBCompany {
  contactName: string;
  contactEmail: string;
  companyName: string;
  contactPhoneNumber: string;
  companyWebsite: string;
  companyDescription: string;
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
