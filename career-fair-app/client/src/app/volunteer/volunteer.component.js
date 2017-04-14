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
var Volunteer = (function () {
    function Volunteer(first, last, mail, begin, end, duty) {
        this.firstName = first;
        this.lastName = last;
        this.email = mail;
        this.beginTime = begin;
        this.endTime = end;
        this.position = duty;
    }
    return Volunteer;
}());
var VolunteerComponent = (function () {
    function VolunteerComponent() {
        this.startTime = new Date();
        this.endTime = new Date();
        this.minStep = 30;
        this.maxTime = new Date();
        this.minTime = new Date();
        this.title = "Volunteer Registration";
        this.volunteerOptions = ['Unloading in Parking Lot', 'Assisting in Setting up Tables'];
        this.tempVolunteer = {
            firstName: "",
            lastName: "",
            email: "",
            beginTime: new Date(),
            endTime: new Date(),
            position: ""
        };
        this.maxTime.setHours(17);
        this.minTime.setHours(12);
        this.maxTime.setMinutes(0);
        this.minTime.setMinutes(0);
        this.startTime.setHours(12);
        this.startTime.setMinutes(0);
        this.endTime.setHours(12);
        this.endTime.setMinutes(0);
        this.volunteerList = [];
        this.alreadyInList = false;
        this.registrationComplete = true;
        this.lowerString = "";
    }
    VolunteerComponent.prototype.onSubmit = function () {
        this.traverseVolunteerList(this.tempVolunteer.firstName);
        if (this.alreadyInList == false) {
            this.newVolunteer = new Volunteer(this.tempVolunteer.firstName, this.tempVolunteer.lastName, this.lowerString, this.startTime, this.endTime, this.tempVolunteer.position);
            this.volunteerList.push(this.newVolunteer);
            this.registrationComplete = true;
        }
        else {
            this.alreadyInList = false;
        }
    };
    VolunteerComponent.prototype.toLower = function (myString) {
        this.lowerString = myString;
        return true;
    };
    VolunteerComponent.prototype.validEmail = function () {
        for (var i = 0; i < this.tempVolunteer.email.length; i++) {
            if (this.tempVolunteer.email[i] == '@') {
                return true;
            }
        }
        if (this.tempVolunteer.email.length == 0)
            return true;
        return false;
    };
    VolunteerComponent.prototype.validSameEmail = function (myEmail) {
        for (var i = 0; i < this.volunteerList.length; i++) {
            if (myEmail == this.volunteerList[i].email)
                return true;
        }
        return false;
    };
    VolunteerComponent.prototype.changed = function () {
        console.log('Time changed to:' + this.startTime);
    };
    VolunteerComponent.prototype.traverseVolunteerList = function (fname) {
        for (var i = 0; i < this.volunteerList.length; i++) {
            if (fname == this.volunteerList[i].firstName) {
                this.alreadyInList = true;
            }
        }
    };
    VolunteerComponent = __decorate([
        core_1.Component({
            selector: 'volunteer',
            templateUrl: './volunteer.component.html',
            styleUrls: ['./volunteer.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], VolunteerComponent);
    return VolunteerComponent;
}());
exports.VolunteerComponent = VolunteerComponent;
//# sourceMappingURL=volunteer.component.js.map