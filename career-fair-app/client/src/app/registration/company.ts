
export class Company {

    contactName: string;
    contactEmail: string;
    companyName: string;
    contactPhoneNumber: string;
    companyWebsite: string;
    companyDescription: string;
    majorsSelected: string[];
    positionsSelected: string[];
    registrationType: string;
    moneyOwed: number;
    positionsTest: string;
    majorsTest: string;
    confirmation: string; //current time and date converted to string
    billingContactName: string;
    billingEmail: string;

    constructor() {
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

    toDisplay(displayMe: string) {
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
        /* Position types */
        else if (displayMe.match(/co\_op/))
            return "CO OP";
        else if (displayMe.match(/full\_time/))
            return "Full Time Position";
        else if (displayMe.match(/summer\_intership/))
            return "Summer Internship";
        /* Registration types */
        else if (displayMe.match(/resumeBookAndTable/))
            return "Resume Book and Table";
        else if (displayMe.match(/resumeBook/))
            return "Resume Book Package";
        else if (displayMe.match(/table/))
            return "Table";
    }

    AddMajor(major: string) {
        var wasAlreadyIn = false;
        for (var i = 0; i < this.majorsSelected.length; i++) {
            if (this.majorsSelected[i] == major) {
                this.majorsSelected.splice(i, 1);
                wasAlreadyIn = true;
            }
        }
        if(wasAlreadyIn == false) {
            this.majorsSelected.push(major);
        }
    }

    AddPosition(position: string) {
        var wasAlreadyIn = false;
        for (var i = 0; i < this.positionsSelected.length; i++) {
            if (this.positionsSelected[i] == position) {
                this.positionsSelected.splice(i, 1);
                wasAlreadyIn = true;
            }
        }
        if(wasAlreadyIn == false) {
            this.positionsSelected.push(position);
        }
    }


    convertToSingleString(toConvert: string[]) {
        let toReturn: string = "";
        for (var i = 0; i < toConvert.length; i++) {
            if (i == 0) {
                toReturn = toReturn + toConvert[i];
            }
            else {
                toReturn = toReturn + ", " + toConvert[i];
            }
        }
        return toReturn;
    }

    calculateMoneyOwed(registrationType: string) {
        if (registrationType == "resumeBook") {
            this.moneyOwed = 150;
        }
        else if (registrationType == "table") {
            this.moneyOwed = 450;
        }
        else if (registrationType == "resumeBookAndTable") {
            this.moneyOwed = 550;
        }
    }

    setConfirmationNumber() {
        this.confirmation = this.getDate();
    }

    getDate() {
        let date = new Date();
        let dateNumber = "";
        let monthStr = "";
        if (date.getDate() < 10) {
            dateNumber = '0' + date.getDate().toString();
        }
        let month = date.getMonth() + 1; //because january is 0
        if (month < 10) {
            monthStr = "0" + month.toString();
        }

        return monthStr + dateNumber + date.getFullYear().toString() + date.getHours().toString() +
            date.getMinutes().toString() + date.getSeconds().toString() + date.getMilliseconds().toString();
    }

}

export const MAJOR_OPTIONS: string[] = [
    //engineering/tech i could think of..KEEP IN ALPHABETICAL ORDER
    "cagd", //computer animation and game development 
    "cimt", //concrete industry management
    "cmgt", //construction management
    "cins",
    "civl",
    "csci",
    "eece",
    "meca", //mechatronic
    "mech", //mechicanal
    "mins",
    "smfg", //sustainable manufacturing
];

export const POSITION_OPTIONS: string[] = [
    "co_op",
    "full_time",
    "summer_internship",
];
