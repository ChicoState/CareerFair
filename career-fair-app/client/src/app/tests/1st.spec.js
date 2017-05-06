"use strict";
var company_1 = require('../registration/company');
describe('Sanity Test', function () {
    it('should be true', function () { return expect(true).toBe(true); });
    it('2 + 2', function () { return expect(2 + 2).toBe(4); });
});
describe('Company Tests', function () {
    it('money owed is 150', function () {
        var x = new company_1.Company();
        x.calculateMoneyOwed('resumeBook');
        var money = x.moneyOwed;
        expect(money).toBe(150);
    });
    it('money owed is 450', function () {
        var x = new company_1.Company();
        x.calculateMoneyOwed('table');
        var money = x.moneyOwed;
        expect(money).toBe(450);
    });
    it('money owed is 550', function () {
        var x = new company_1.Company();
        x.calculateMoneyOwed('resumeBookAndTable');
        var money = x.moneyOwed;
        expect(money).toBe(550);
    });
    it('convert to single string', function () {
        var x = new company_1.Company();
        var arr = ["it", "is", "super", "late"];
        var p = "it, is, super, late";
        expect(x.convertToSingleString(arr)).toBe(p);
    });
    it('testing adding major', function () {
        var x = new company_1.Company();
        x.AddMajor("hello");
        x.AddMajor("there");
        var r = x.convertToSingleString(x.majorsSelected);
        var expected = "hello, there";
        expect(r).toBe(expected);
    });
    it('adding 3 different words should be length of 3', function () {
        var x = new company_1.Company();
        x.AddMajor("hello");
        x.AddMajor("there");
        x.AddMajor("hell");
        expect(x.majorsSelected.length).toBe(3);
    });
    it('same word added should result in 0', function () {
        var x = new company_1.Company();
        x.AddMajor("hello");
        x.AddMajor("hello");
        expect(x.majorsSelected.length).toBe(0);
    });
    it('testing adding position', function () {
        var x = new company_1.Company();
        x.AddPosition("hello");
        x.AddPosition("there");
        var r = x.convertToSingleString(x.positionsSelected);
        var expected = "hello, there";
        expect(r).toBe(expected);
    });
    it('adding 3 different words should be length of 3 (position)', function () {
        var x = new company_1.Company();
        x.AddPosition("hello");
        x.AddPosition("there");
        x.AddPosition("hell");
        expect(x.positionsSelected.length).toBe(3);
    });
    it('same word added should result in 0 (position)', function () {
        var x = new company_1.Company();
        x.AddPosition("hello");
        x.AddPosition("hello");
        expect(x.positionsSelected.length).toBe(0);
    });
    it('testing displaying major', function () {
        var x = new company_1.Company();
        var expected = "Computer Animation and Game Development";
        var test_ = x.toDisplay("cagd ");
        expect(expected).toBe(test_);
    });
    it('testing displaying position type', function () {
        var x = new company_1.Company();
        var expected = "CO OP";
        var test_ = x.toDisplay("co_op");
        expect(expected).toBe(test_);
    });
    it('testing displaying registration type', function () {
        var x = new company_1.Company();
        var expected = "Table";
        var test_ = x.toDisplay("table");
        expect(expected).toBe(test_);
    });
    it('testing resumeBook (first) vs resumeBookAndTable', function () {
        var x = new company_1.Company();
        var expected = "Resume Book Package";
        var test_ = x.toDisplay("resumeBook");
        expect(expected).toBe(test_);
    });
    it('testing resumeBook vs resumeBookAndTable (first)', function () {
        var x = new company_1.Company();
        var expected = "Resume Book and Table";
        var test_ = x.toDisplay("resumeBookAndTable");
        expect(expected).toBe(test_);
    });
});
//# sourceMappingURL=1st.spec.js.map