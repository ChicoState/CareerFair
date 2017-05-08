
export class Volunteer {
    firstName: string;
    lastName: string;
    email: string;
    beginTime: Date;
    endTime: Date;
    position: string;
    lowerString: string;
	  
    constructor (first: string, last: string, mail: string, begin: Date, end: Date,duty: string)
    {
      this.firstName = first;
      this.lastName = last;
      this.email = mail;
      this.beginTime = begin;
      this.endTime = end;
      this.position = duty;
    }

  toLower(myString: string): boolean {
    this.lowerString = myString;
    return true;
  }

  validEmail(): boolean {
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
  }
}