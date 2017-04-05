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
        this.majorOptions = exports.MAJOR_OPTIONS; //majors to choose from
        this.positionOptions = exports.POSITION_OPTIONS; //positions to choose from
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
    RegistrationComponent.prototype.getDate = function () {
        var date = new Date();
        var dateNumber = "";
        var monthStr = "";
        if (date.getDate() < 10) {
            dateNumber = '0' + date.getDate().toString();
        }
        var month = date.getMonth() + 1; //because january is 0
        if (month < 10) {
            monthStr = "0" + month.toString();
        }
        return monthStr + dateNumber + date.getFullYear().toString() + date.getHours().toString() +
            date.getMinutes().toString() + date.getSeconds().toString() + date.getMilliseconds().toString();
    };
    RegistrationComponent.prototype.ToDisplay = function (displayMe) {
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
        else if (displayMe == "co_op")
            return "CO OP";
        else if (displayMe == "full_time")
            return "Full Time Position";
        else if (displayMe == "summer_internship")
            return "Summer Internship";
    };
    /*
     * The AddMajor(major: string)  is used to initialize
     * majorOptions
     *
     *
     */
    RegistrationComponent.prototype.AddMajor = function (major) {
        for (var i = 0; i < this.newCompany.majorsSelected.length; i++) {
            if (this.newCompany.majorsSelected[i] == major) {
                this.newCompany.majorsSelected.splice(i, 1);
                if (this.newCompany.majorsSelected.length > 0) {
                    this.majorsSelectedBoolean = true;
                }
                else {
                    this.majorsSelectedBoolean = false;
                }
                return;
            }
        }
        this.newCompany.majorsSelected.push(major);
    };
    /*
     * The AddPosition(position: string)  is used to initialize
     * positionsSelected
     *
     *
     */
    RegistrationComponent.prototype.AddPosition = function (position) {
        for (var i = 0; i < this.newCompany.positionsSelected.length; i++) {
            if (this.newCompany.positionsSelected[i] == position) {
                this.newCompany.positionsSelected.splice(i, 1);
                if (this.newCompany.positionsSelected.length > 0) {
                    this.positionsSelectedBoolean = true;
                }
                else {
                    this.positionsSelectedBoolean = false;
                }
                return;
            }
        }
        this.newCompany.positionsSelected.push(position);
    };
    RegistrationComponent.prototype.convertToSingleString = function (toConvert) {
        var toReturn = "";
        for (var i = 0; i < toConvert.length; i++) {
            if (i == 0) {
                toReturn = toReturn + toConvert[i];
            }
            else {
                toReturn = toReturn + ", " + toConvert[i];
            }
        }
        return toReturn;
    };
    RegistrationComponent.prototype.calculateMoneyOwed = function (registrationType) {
        if (registrationType == "resumeBook") {
            this.newCompany.moneyOwed = 150;
        }
        else if (registrationType == "table") {
            this.newCompany.moneyOwed = 450;
        }
        else if (registrationType == "resumeBookAndTable") {
            this.newCompany.moneyOwed = 550;
        }
    };
    RegistrationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.calculateMoneyOwed(this.newCompany.registrationType);
        this.newCompany.positionsTest = this.convertToSingleString(this.newCompany.positionsSelected);
        this.newCompany.majorsTest = this.convertToSingleString(this.newCompany.majorsSelected);
        this.newCompany.confirmation = this.getDate();
        //this.calculateMoneyOwed(this.newCompany.registrationType);
        /* MESSAGE TO FRANK
         * Alright Frank so below is a instance of the class CompanyDB,
         * this class is based on how the schema of the database is set up
         * the class is defined all the way at the bottom of this component
         * just in case you wanted to see the definitions
         */
        var newCompany = {
            contactName: this.newCompany.contactName,
            contactEmail: this.newCompany.contactEmail,
            companyName: this.newCompany.companyName,
            contactPhoneNumber: this.newCompany.contactPhoneNumber,
            companyWebsite: this.newCompany.companyWebsite,
            companyDescription: this.newCompany.companyDescription,
            //frank added the following
            registrationType: this.newCompany.registrationType,
            desiredPositions: this.newCompany.positionsTest,
            desiredMajors: this.newCompany.majorsTest,
            moneyOwed: this.newCompany.moneyOwed,
            confirmation: this.newCompany.confirmation,
        };
        //this.companyService.addCompany(newCompany).subscribe(company => { 
        //});  
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
var Company = (function () {
    function Company() {
    }
    return Company;
}());
var DBCompany = (function () {
    function DBCompany() {
    }
    return DBCompany;
}());
exports.MAJOR_OPTIONS = [
    //engineering/tech i could think of..KEEP IN ALPHABETICAL ORDER
    "cagd",
    "cimt",
    "cmgt",
    "cins",
    "civl",
    "csci",
    "eece",
    "meca",
    "mech",
    "mins",
    "smfg",
];
exports.POSITION_OPTIONS = [
    "co_op",
    "full_time",
    "summer_internship",
];
//# sourceMappingURL=registration.component.js.map