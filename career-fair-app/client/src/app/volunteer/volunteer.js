"use strict";
var Volunteer = (function () {
    function Volunteer(first, last, mail, begin, end, duty) {
        this.firstName = first;
        this.lastName = last;
        this.email = mail;
        this.beginTime = begin;
        this.endTime = end;
        this.position = duty;
    }
    Volunteer.prototype.toLower = function (myString) {
        this.lowerString = myString;
        return true;
    };
    Volunteer.prototype.validEmail = function () {
        if (this.email.length > 0) {
            var emailPattern = /^(\d*\w*)+\@\w+\.\w+(\.\w+)*$/;
            var emailRegex = new RegExp(emailPattern);
            if (this.email.match(emailRegex)) {
                return true;
            }
            else
                return false;
        }
        else
            return false;
    };
    return Volunteer;
}());
exports.Volunteer = Volunteer;
//# sourceMappingURL=volunteer.js.map