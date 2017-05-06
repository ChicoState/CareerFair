"use strict";
var company_1 = require('../registration/company');
describe('1st tests', function () {
    it('true is true', function () { return expect(true).toBe(true); });
    it('2 + 2', function () { return expect(2 + 2).toBe(4); });
    it('', function () {
        var x = new company_1.Company();
        x.calculateMoneyOwed('resumeBook');
        var money = x.moneyOwed;
        var _is = false;
        if (money == 150) {
            _is = true;
        }
        expect(_is).toBe(true);
    });
});
//# sourceMappingURL=1st.spec.js.map