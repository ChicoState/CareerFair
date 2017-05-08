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
var CompaniesComponent = (function () {
    function CompaniesComponent(companiesService) {
        var _this = this;
        this.companiesService = companiesService;
        this.companiesService.getCompanies().subscribe(function (companies) {
            _this.companies = companies;
            //desiredPositions and desiredMajors
            for (var i = 0; i < _this.companies.length; i++) {
                _this.companies[i].desiredPositions = _this.setupString(_this.companies[i].desiredPositions);
                _this.companies[i].desiredMajors = _this.setupString(_this.companies[i].desiredMajors);
            }
        });
    }
    CompaniesComponent.prototype.toggled = function (open) {
        console.log('Dropdown is now: ', open);
    };
    CompaniesComponent.prototype.setupString = function (toTransform) {
        var toReturn = "";
        var afterSplit;
        if (toTransform.indexOf(",", 0) > 0) {
            afterSplit = toTransform.split(",");
            for (var i = 0; i < afterSplit.length; i++) {
                var part = afterSplit[i];
                var trans = this.toDisplay(afterSplit[i]);
                if (i == 0) {
                    toReturn = toReturn + trans;
                }
                else {
                    toReturn = toReturn + ", " + trans;
                }
            }
        }
        else {
            toReturn = this.toDisplay(toTransform);
        }
        return toReturn;
    };
    CompaniesComponent.prototype.toDisplay = function (displayMe) {
        /* Different Majors */
        if (displayMe.includes("cagd"))
            return "Computer Animation and Game Development";
        else if (displayMe.includes("cimt"))
            return "Concrete Industry Management";
        else if (displayMe.includes("cmgt"))
            return "Construction Management";
        else if (displayMe.includes("cins"))
            return "Computer Information Systems";
        else if (displayMe.includes("civl"))
            return "Civil Engineering";
        else if (displayMe.includes("csci"))
            return "Computer Science";
        else if (displayMe.includes("eece"))
            return "Electrical Engineering";
        else if (displayMe.includes("meca"))
            return "Mechatronic Engineering";
        else if (displayMe.includes("mech"))
            return "Mechanical Engineering";
        else if (displayMe.includes("mins"))
            return "Management Information Systems";
        else if (displayMe.includes("smfg"))
            return "Sustainable Manufacturing";
        else if (displayMe.includes("co_op"))
            return "CO OP";
        else if (displayMe.includes("full_time"))
            return "Full Time Position";
        else if (displayMe.includes("summer_internship"))
            return "Summer Internship";
        else if (displayMe == "resumeBook")
            return "Resume";
        else if (displayMe == "table")
            return "Table";
        else if (displayMe == "resumeBookAndTable")
            return "Resume Book and Table";
    };
    CompaniesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'companies',
            templateUrl: 'companies.component.html',
            styleUrls: ['./companies.component.css']
        }), 
        __metadata('design:paramtypes', [companies_service_1.CompaniesService])
    ], CompaniesComponent);
    return CompaniesComponent;
}());
exports.CompaniesComponent = CompaniesComponent;
//# sourceMappingURL=companies.component.js.map