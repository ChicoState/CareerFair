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
var RegistrationComponent = (function () {
    function RegistrationComponent() {
        this.title = 'Registration';
        this.majorOptions = exports.MAJOR_OPTIONS; //majors to choose from
        this.positionOptions = exports.POSITION_OPTIONS; //positions to choose from
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
      When companies check a major, we add that major to their majorsSelected array. If
      they're checking it again (therefore unchecking it), we remove it from majorsSelected.
      Function is called every time a major is checked or unchecked
    */
    RegistrationComponent.prototype.AddMajor = function (major) {
        for (var i = 0; i < this.majorsSelected.length; i++) {
            if (this.majorsSelected[i] == major) {
                this.majorsSelected.splice(i, 1);
                return;
            }
        }
        this.majorsSelected.push(major);
    };
    RegistrationComponent.prototype.AddPosition = function (position) {
        for (var i = 0; i < this.positionsSelected.length; i++) {
            if (this.positionsSelected[i] == position) {
                this.positionsSelected.splice(i, 1);
                return;
            }
        }
        this.positionsSelected.push(position);
    };
    RegistrationComponent.prototype.OnSumbit = function () {
        this.companiesInserted.push(this.newCompany);
    };
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
    RegistrationComponent.prototype.transformWebsite = function (website) {
        if (website.includes("http://", 0) || website.includes("https://", 0)) {
            return website;
        }
        else {
            return "https://" + website;
        }
    };
    RegistrationComponent.prototype.onSubmit = function () {
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
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'registration',
            templateUrl: 'registration.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent; // end of component
var Company = (function () {
    function Company() {
    }
    return Company;
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