import { Component } from '@angular/core';
import { CompaniesService } from './../services/companies.service';
import { Company } from './company';
import { MAJOR_OPTIONS } from './company';
import { POSITION_OPTIONS } from './company';

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
    this.aCompaniesService.getCompanies().subscribe(companiesInserted => { 
			this.companiesInserted = companiesInserted; 
		});
    this.companiesInserted = [];
    this.companyService = aCompaniesService;
    this.entireFormSubmitted = false;

    this.newCompany = new Company();
    this.newCompany.positionsSelected = [];
    this.newCompany.majorsSelected = [];
    this.newCompany.registrationType = "resumeBook";
  }

  validURL(): boolean {
    if (this.newCompany.companyWebsite.length > 0) {
      var urlPattern = /^(https:\/\/|http:\/\/)(www\.)?(\w*\d*)+\.\w+(\/(\w*\d*)+)*((\w*\d*)+\.\w+)?$/gi;
      var urlRegex = new RegExp(urlPattern);
      if (this.newCompany.companyWebsite.match(urlRegex)) {
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

 validSameEmail(myEmail: string): boolean {
    for (var i = 0; i < this.companiesInserted.length; i++)
    {
      if (myEmail == this.companiesInserted[i].contactEmail)
      return true;
    }

    return false
  }

   validBillingSameEmail(myEmail: string): boolean {
    for (var i = 0; i < this.companiesInserted.length; i++)
    {
      if (myEmail == this.companiesInserted[i].billingEmail)
      return true;
    }

    return false
  }

  validContactEmail(): boolean {
    if (this.newCompany.contactEmail.length > 0) {
      var emailPattern = /^(\d*\w*)+\@\w+\.\w+(\.\w+)*$/;
      var emailRegex = new RegExp(emailPattern);
      if (this.newCompany.contactEmail.match(emailRegex)) {
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

  validBillingEmail(): boolean {
    if (this.newCompany.billingEmail.length > 0) {
      var emailPattern = /^(\d*\w*)+\@\w+\.\w+(\.\w+)*$/;
      var emailRegex = new RegExp(emailPattern);
      if (this.newCompany.billingEmail.match(emailRegex)) {
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

  validPhoneNumber(): boolean {
    if(this.newCompany.contactPhoneNumber.length > 0) {
      var phonePattern = /^(\(?\d{3}\)?)\-?\.?\s*\d{3}\-?\.?\s*\d{4}$/;
      var phoneRegex = new RegExp(phonePattern);
      if(this.newCompany.contactPhoneNumber.match(phoneRegex)) {
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

  validMajorsChosen() : boolean {
    if(this.newCompany.majorsSelected.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  validPositionsChosen() : boolean {
    if(this.newCompany.positionsSelected.length > 0) {
      return true;
    }
    else {
      return false;
    }
  }

  isFormValid() : boolean {
    let valid: boolean = false;
    if(this.validBillingEmail() && this.validMajorsChosen() && this.validContactEmail() &&
        this.validPhoneNumber() && this.validPositionsChosen() && this.validURL() && 
        this.newCompany.billingContactName.length > 0 && this.newCompany.contactName.length > 0
        && this.newCompany.companyName.length > 0 && this.newCompany.companyDescription.length > 0 &&
        !this.validBillingSameEmail(this.newCompany.billingEmail) && !this.validSameEmail(this.newCompany.contactEmail)) {
      valid = true;
    }
    return valid;
  }

  AddMajor(major: string) {
    this.newCompany.AddMajor(major);
  }

  AddPosition(position: string) {
    this.newCompany.AddPosition(position);
  }

  convertToSingleString(toConvert: string[]) {
    return this.newCompany.convertToSingleString(toConvert);
  }

  calculateMoneyOwed(registrationType: string) {
    this.newCompany.calculateMoneyOwed(registrationType);
  }


  onSubmit() {
    this.submitted = true;
    this.calculateMoneyOwed(this.newCompany.registrationType);
    this.newCompany.positionsTest = this.convertToSingleString(this.newCompany.positionsSelected);
    this.newCompany.majorsTest = this.convertToSingleString(this.newCompany.majorsSelected);
    this.newCompany.setConfirmationNumber();

    var newCompany = {
      contactName: this.newCompany.contactName,
      contactEmail: this.newCompany.contactEmail,
      companyName: this.newCompany.companyName,
      contactPhoneNumber: this.newCompany.contactPhoneNumber,
      companyWebsite: this.newCompany.companyWebsite,
      companyDescription: this.newCompany.companyDescription,
      registrationType: this.newCompany.registrationType,
      desiredPositions: this.newCompany.positionsTest,
      desiredMajors: this.newCompany.majorsTest,
      moneyOwed: this.newCompany.moneyOwed,
      confirmation: this.newCompany.confirmation,
      billingContactName: this.newCompany.billingContactName,
      billingEmail: this.newCompany.billingEmail,
    }

    this.companyService.addCompany(newCompany).subscribe(company => {

    });
  }

} // end of component