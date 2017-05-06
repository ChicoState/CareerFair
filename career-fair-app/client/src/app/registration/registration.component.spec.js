"use strict";
var registration_component_1 = require('./registration.component');
var company_1 = require('./company');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
describe('1st tests', function () {
    it('true is true', function () { return expect(true).toBe(true); });
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [registration_component_1.RegistrationComponent],
        });
        fixture = testing_1.TestBed.createComponent(registration_component_1.RegistrationComponent);
        comp = fixture.componentInstance; // BannerComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
    it('company valid email', function () {
        var company = new company_1.Company();
        company.calculateMoneyOwed("resumeBook");
        var _150 = company.moneyOwed;
        expect(_150).toBe(150);
    });
});
//# sourceMappingURL=registration.component.spec.js.map