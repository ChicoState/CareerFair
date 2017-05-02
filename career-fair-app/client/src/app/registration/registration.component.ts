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

    this.newCompany = new Company();
    this.newCompany.positionsSelected = [];
    this.newCompany.majorsSelected = [];
    this.newCompany.registrationType = "resumeBook";
  }

  validURL(): boolean {
    if (this.newCompany.companyWebsite.length > 0) {
      var urlPattern = /(https:\/\/|http:\/\/)(www\.)?(\w*\d*)+\.\w+(\/(\w*\d*)+)*/gi;
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

  validContactEmail(): boolean {
    if (this.newCompany.contactEmail.length > 0) {
      var emailPattern = /(\d*\w*)+\@\w+\.\w+(\.\w+)*/;
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
      var emailPattern = /(\d*\w*)+\@\w+\.\w+(\.\w+)*/;
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
    let numCount: number = 0;

    for (var i = 0; i < this.newCompany.contactPhoneNumber.length; i++) {
      if (this.newCompany.contactPhoneNumber[i] >= '0' && this.newCompany.contactPhoneNumber[i] <= '9') {
        numCount += 1;
      }
      if (this.newCompany.contactPhoneNumber[i] >= 'a' &&
        this.newCompany.contactPhoneNumber[i] <= 'Z')
        return false;
    }
    if (numCount == 11)
      return true;
    else
      return false;
  }

  AddMajor(major: string) {
    this.newCompany.AddMajor(major);
    if (this.newCompany.majorsSelected.length > 0) {
      this.majorsSelectedBoolean = true;
    }
    else {
      this.majorsSelectedBoolean = false;
    }
  }

  AddPosition(position: string) {
    this.newCompany.AddPosition(position);
    if (this.newCompany.positionsSelected.length > 0) {
      this.positionsSelectedBoolean = true;
    }
    else {
      this.positionsSelectedBoolean = false;
    }
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