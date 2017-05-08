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
var volunteers_service_1 = require('../services/volunteers.service');
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
var DBVolunteer = (function () {
    function DBVolunteer(first, last, mail, begin, end, duty) {
        this.firstName = first;
        this.lastName = last;
        this.email = mail;
        this.beginTime = begin;
        this.endTime = end;
        this.position = duty;
    }
    return DBVolunteer;
}());
var VolunteerComponent = (function () {
    function VolunteerComponent(volunteersService) {
        var _this = this;
        this.volunteersService = volunteersService;
        this.title = "Volunteer Registration";
        this.startTime = new Date();
        this.endTime = new Date();
        this.minStep = 30;
        this.maxTime = new Date();
        this.minTime = new Date();
        this.volunteerOptions = ['Unloading in Parking Lot', 'Assisting in Setting up Tables'];
        this.tempVolunteer = {
            firstName: "",
            lastName: "",
            email: "",
            beginTime: new Date(),
            endTime: new Date(),
            position: ""
        };
        this.volunteersService.getVolunteers().subscribe(function (volunteers) {
            _this.volunteers = volunteers;
            _this.volunteersLength = volunteers.length;
        });
        this.maxTime.setHours(17);
        this.minTime.setHours(12);
        this.maxTime.setMinutes(0);
        this.minTime.setMinutes(0);
        this.startTime.setHours(12);
        this.startTime.setMinutes(0);
        this.endTime.setHours(13);
        this.endTime.setMinutes(0);
        this.lowerString = "";
    }
    VolunteerComponent.prototype.onSubmit = function () {
        this.newDBVolunteer = new DBVolunteer(this.tempVolunteer.firstName, this.tempVolunteer.lastName, this.lowerString, this.startTime.toLocaleTimeString(), this.endTime.toLocaleTimeString(), this.tempVolunteer.position);
        this.volunteersService.addVolunteer(this.newDBVolunteer).subscribe(function (volunteer) { });
    };
    VolunteerComponent.prototype.toLower = function (myString) {
        this.lowerString = myString;
        return true;
    };
    VolunteerComponent.prototype.validEmail = function () {
        if (this.tempVolunteer.email.length > 0) {
            var emailPattern = /^(\d*\w*)+\@\w+\.\w+(\.\w+)*$/;
            var emailRegex = new RegExp(emailPattern);
            if (this.tempVolunteer.email.match(emailRegex)) {
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
    VolunteerComponent.prototype.validSameEmail = function (myEmail) {
        for (var i = 0; i < this.volunteersLength; i++) {
            if (myEmail == this.volunteers[i].email)
                return true;
        }
        return false;
    };
    VolunteerComponent.prototype.changed = function () {
        console.log('Time changed to:' + this.startTime);
    };
    VolunteerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'volunteer',
            templateUrl: './volunteer.component.html',
            styleUrls: ['./volunteer.component.css'],
        }), 
        __metadata('design:paramtypes', [volunteers_service_1.VolunteersService])
    ], VolunteerComponent);
    return VolunteerComponent;
}());
exports.VolunteerComponent = VolunteerComponent;
//# sourceMappingURL=volunteer.component.js.map