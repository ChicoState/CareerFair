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
        if (displayMe.includes("cagd"))
            return "Computer Animation and Game Development";
        else if (displayMe.includes("cimt"))
            return "Concrete Industry Management";
        else if (displayMe.includes("cmgt"))
            return "Construction Management";
        else if (displayMe.includes("cins"))
            return "Computer Information Systems";
        else if (displayMe.includes("civl"))
            return "Civil Engineering";
        else if (displayMe.includes("csci"))
            return "Computer Science";
        else if (displayMe.includes("eece"))
            return "Electrical Engineering";
        else if (displayMe.includes("meca"))
            return "Mechatronic Engineering";
        else if (displayMe.includes("mech"))
            return "Mechanical Engineering";
        else if (displayMe.includes("mins"))
            return "Management Information Systems";
        else if (displayMe.includes("smfg"))
            return "Sustainable Manufacturing";
        else if (displayMe.includes("co_op"))
            return "CO OP";
        else if (displayMe.includes("full_time"))
            return "Full Time Position";
        else if (displayMe.includes("summer_internship"))
            return "Summer Internship";
        else if (displayMe == "resumeBook")
            return "Resume";
        else if (displayMe == "table")
            return "Table";
        else if (displayMe == "resumeBookAndTable")
            return "Resume Book and Table";
    };
    Company.prototype.AddMajor = function (major) {
        for (var i = 0; i < this.majorsSelected.length; i++) {
            if (this.majorsSelected[i] == major) {
                this.majorsSelected.splice(i, 1);
            }
        }
        this.majorsSelected.push(major);
    };
    Company.prototype.AddPosition = function (position) {
        for (var i = 0; i < this.positionsSelected.length; i++) {
            if (this.positionsSelected[i] == position) {
                this.positionsSelected.splice(i, 1);
            }
        }
        this.positionsSelected.push(position);
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