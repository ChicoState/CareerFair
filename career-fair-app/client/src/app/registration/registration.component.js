"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var companies_service_1 = require('./../services/companies.service');
var company_1 = require('./company');
var company_2 = require('./company');
var company_3 = require('./company');
var RegistrationComponent = (function () {
    /*
     * The constructor is used to initialize newCompany
     * newCompany has many attributes used in .html file
     * for everytime an attribute in .html file isnt found
     * it references newCompany to see if its there.
    
     * Anything with a Boolean handles error checking for multi-
     * selecting UI's
     */
    function RegistrationComponent(aCompaniesService) {
        this.aCompaniesService = aCompaniesService;
        this.title = 'Registration';
        this.majorOptions = company_2.MAJOR_OPTIONS; //majors to choose from
        this.positionOptions = company_3.POSITION_OPTIONS; //positions to choose from
        this.companiesInserted = [];
        this.companyService = aCompaniesService;
        this.majorsSelectedBoolean = false;
        this.positionsSelectedBoolean = false;
        this.entireFormSubmitted = false;
        this.newCompany = new company_1.Company();
        this.newCompany.positionsSelected = [];
        this.newCompany.majorsSelected = [];
        this.newCompany.registrationType = "resumeBook";
    }
    RegistrationComponent.prototype.validURL = function () {
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
    };
    RegistrationComponent.prototype.validContactEmail = function () {
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
    };
    RegistrationComponent.prototype.validBillingEmail = function () {
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
    };
    RegistrationComponent.prototype.validPhoneNumber = function () {
        if (this.newCompany.contactPhoneNumber.length > 0) {
            var phonePattern = /^(\(?\d{3}\)?)\-?\.?\s*\d{3}\-?\.?\s*\d{4}$/;
            var phoneRegex = new RegExp(phonePattern);
            if (this.newCompany.contactPhoneNumber.match(phoneRegex)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    };
    RegistrationComponent.prototype.AddMajor = function (major) {
        this.newCompany.AddMajor(major);
        if (this.newCompany.majorsSelected.length > 0) {
            this.majorsSelectedBoolean = true;
        }
        else {
            this.majorsSelectedBoolean = false;
        }
    };
    RegistrationComponent.prototype.AddPosition = function (position) {
        this.newCompany.AddPosition(position);
        if (this.newCompany.positionsSelected.length > 0) {
            this.positionsSelectedBoolean = true;
        }
        else {
            this.positionsSelectedBoolean = false;
        }
    };
    RegistrationComponent.prototype.convertToSingleString = function (toConvert) {
        return this.newCompany.convertToSingleString(toConvert);
    };
    RegistrationComponent.prototype.calculateMoneyOwed = function (registrationType) {
        this.newCompany.calculateMoneyOwed(registrationType);
    };
    RegistrationComponent.prototype.onSubmit = function () {
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
        };
        this.companyService.addCompany(newCompany).subscribe(function (company) {
        });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'registration',
            templateUrl: 'registration.component.html',
            styleUrls: ['registration.component.css']
        }), 
        __metadata('design:paramtypes', [companies_service_1.CompaniesService])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent; // end of component
//# sourceMappingURL=registration.component.js.map