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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var CompaniesService = (function () {
    function CompaniesService(http) {
        this.http = http;
        console.log('CompaniesService Initialized...');
    }
    CompaniesService.prototype.getCompanies = function () {
        return this.http.get('http://localhost:3000/api/companies').map(function (res) { return res.json(); });
    };
    CompaniesService.prototype.addCompany = function (newCompany) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/company', JSON.stringify(newCompany), { headers: headers }).map(function (res) { return res.json(); });
    };
    CompaniesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CompaniesService);
    return CompaniesService;
}());
exports.CompaniesService = CompaniesService;
var DBCompany = (function () {
    function DBCompany() {
    }
    return DBCompany;
}());
//# sourceMappingURL=companies.service.js.map