"use strict";
var Company = (function () {
    function Company() {
        this.contactName = "";
        this.contactEmail = "";
        this.companyName = "";
        this.contactPhoneNumber = "";
        this.companyWebsite = "";
        this.companyDescription = "";
        this.majorsSelected = [];
        this.positionsSelected = [];
        this.registrationType = "";
        this.moneyOwed = 0;
        this.positionsTest = "";
        this.majorsTest = "";
        this.confirmation = "";
        this.billingContactName = "";
        this.billingEmail = "";
    }
    Company.prototype.toDisplay = function (displayMe) {
        /* Different Majors */
        if (displayMe.match(/cagd/))
            return "Computer Animation and Game Development";
        else if (displayMe.match(/cimt/))
            return "Concrete Industry Management";
        else if (displayMe.match(/cmgt/))
            return "Construction Management";
        else if (displayMe.match(/cins/))
            return "Computer Information Systems";
        else if (displayMe.match(/civl/))
            return "Civil Engineering";
        else if (displayMe.match(/csci/))
            return "Computer Science";
        else if (displayMe.match(/eece/))
            return "Electrical Engineering";
        else if (displayMe.match(/meca/))
            return "Mechatronic Engineering";
        else if (displayMe.match(/mech/))
            return "Mechanical Engineering";
        else if (displayMe.match(/mins/))
            return "Management Information Systems";
        else if (displayMe.match(/smfg/))
            return "Sustainable Manufacturing";
        else if (displayMe.match(/co\_op/))
            return "CO OP";
        else if (displayMe.match(/full\_time/))
            return "Full Time Position";
        else if (displayMe.match(/summer\_intership/))
            return "Summer Internship";
        else if (displayMe.match(/resumeBookAndTable/))
            return "Resume Book and Table";
        else if (displayMe.match(/resumeBook/))
            return "Resume Book Package";
        else if (displayMe.match(/table/))
            return "Table";
    };
    Company.prototype.AddMajor = function (major) {
        var wasAlreadyIn = false;
        for (var i = 0; i < this.majorsSelected.length; i++) {
            if (this.majorsSelected[i] == major) {
                this.majorsSelected.splice(i, 1);
                wasAlreadyIn = true;
            }
        }
        if (wasAlreadyIn == false) {
            this.majorsSelected.push(major);
        }
    };
    Company.prototype.AddPosition = function (position) {
        var wasAlreadyIn = false;
        for (var i = 0; i < this.positionsSelected.length; i++) {
            if (this.positionsSelected[i] == position) {
                this.positionsSelected.splice(i, 1);
                wasAlreadyIn = true;
            }
        }
        if (wasAlreadyIn == false) {
            this.positionsSelected.push(position);
        }
    };
    Company.prototype.convertToSingleString = function (toConvert) {
        var toReturn = "";
        for (var i = 0; i < toConvert.length; i++) {
            if (i == 0) {
                toReturn = toReturn + toConvert[i];
            }
            else {
                toReturn = toReturn + ", " + toConvert[i];
            }
        }
        return toReturn;
    };
    Company.prototype.calculateMoneyOwed = function (registrationType) {
        if (registrationType == "resumeBook") {
            this.moneyOwed = 150;
        }
        else if (registrationType == "table") {
            this.moneyOwed = 450;
        }
        else if (registrationType == "resumeBookAndTable") {
            this.moneyOwed = 550;
        }
    };
    Company.prototype.setConfirmationNumber = function () {
        this.confirmation = this.getDate();
    };
    Company.prototype.getDate = function () {
        var date = new Date();
        var dateNumber = "";
        var monthStr = "";
        if (date.getDate() < 10) {
            dateNumber = '0' + date.getDate().toString();
        }
        var month = date.getMonth() + 1; //because january is 0
        if (month < 10) {
            monthStr = "0" + month.toString();
        }
        return monthStr + dateNumber + date.getFullYear().toString() + date.getHours().toString() +
            date.getMinutes().toString() + date.getSeconds().toString() + date.getMilliseconds().toString();
    };
    return Company;
}());
exports.Company = Company;
exports.MAJOR_OPTIONS = [
    //engineering/tech i could think of..KEEP IN ALPHABETICAL ORDER
    "cagd",
    "cimt",
    "cmgt",
    "cins",
    "civl",
    "csci",
    "eece",
    "meca",
    "mech",
    "mins",
    "smfg",
];
exports.POSITION_OPTIONS = [
    "co_op",
    "full_time",
    "summer_internship",
];
//# sourceMappingURL=company.js.map