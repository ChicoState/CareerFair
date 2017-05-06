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
var companies_service_1 = require('./services/companies.service');
var volunteers_service_1 = require('./services/volunteers.service');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Engineering Technical Career Fair';
        this.date = 'February 16, 2017 Thursday, 12:30 - 4:30';
        this.location = ' Bell Memorial Union';
        this.footerLine1 = 'MESA Programs, O\'Connell 114';
        this.footerLine2 = 'California State University, Chico';
        this.footerLine3 = '400 West First Street';
        this.footerLine4 = 'Chico, CA 95929-0100';
        this.footerLine5 = '(530) 898-4017';
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            providers: [companies_service_1.CompaniesService, volunteers_service_1.VolunteersService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map