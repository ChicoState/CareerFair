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
var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'Welcome to the Technical Career Fair Homepage';
        this.subtitle = ' Sponsored by the College of Engineering';
        this.paragraph1 = 'The Technical Career Fair is an event where many impactful companies come to find some of the best students for their job needs. This includes students majoring in Civil Engineering, Construction Management, Computer Science, Management Information Systems, Electrical Engineering, Computer Engineering, Mechanical Engineering, Mechatronic Engineering, Sustainable Manufacturing, Concrete Industry Management, and Computer Animation and Game Development.';
        this.paragraph2 = 'This is a great event for students to meet industry leaders and learn more about the many career options that are available to them. Student or employer, attending this event will surely provide a great experience for anyone who attends. Whether it be an internship or full-time employement, this career fair offers exposure to now over 70 companies.';
    }
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'home',
            templateUrl: 'home.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map