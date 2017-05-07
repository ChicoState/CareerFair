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
var app_component_1 = require('../app.component');
var FooterComponent = (function () {
    function FooterComponent(appComponent) {
        this.appComponent = appComponent;
        this.footerLine1 = this.appComponent.footerLine1;
        this.footerLine2 = this.appComponent.footerLine2;
        this.footerLine3 = this.appComponent.footerLine3;
        this.footerLine4 = this.appComponent.footerLine4;
        this.footerLine5 = this.appComponent.footerLine5;
    }
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'layout-footer',
            templateUrl: 'footer.component.html',
            styleUrls: ['./footer.component.css']
        }), 
        __metadata('design:paramtypes', [app_component_1.AppComponent])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map