import { Component,Input } from '@angular/core';
import { TimepickerModule } from 'ng2-bootstrap/timepicker';
import { AlertModule } from 'ng2-bootstrap/alert';
import { ModalModule } from 'ng2-bootstrap/modal'
import { VolunteersService } from '../services/volunteers.service'; 

class Volunteer {
    firstName: string;
    lastName: string;
    email: string;
    beginTime: Date;
    endTime: Date;
    position: string;

    constructor (first: string, last: string, mail: string, begin: Date, end: Date,duty: string)
    {
      this.firstName = first;
      this.lastName = last;
      this.email = mail;
      this.beginTime = begin;
      this.endTime = end;
      this.position = duty;
    }
}

class DBVolunteer { 
	firstName: string; 
	lastName: string; 
	email: string; 
	beginTime: string; 
	endTime: string; 
	position: string; 
	constructor (first: string, last: string, mail: string, begin: string, end: string,duty: string)
    {
      this.firstName = first;
      this.lastName = last;
      this.email = mail;
      this.beginTime = begin;
      this.endTime = end;
      this.position = duty;
    }
}


@Component({
  moduleId: module.id,
  selector: 'volunteer',
  templateUrl: './volunteer.component.html',
//   templateUrl: `Hello`,
  styleUrls: ['./volunteer.component.css'],
})

export class VolunteerComponent {

  public startTime: Date = new Date();
  public endTime: Date = new Date();
  
  minStep: number = 30;
  maxTime: Date = new Date();
  minTime: Date = new Date();
  alreadyInList: boolean;
  registrationComplete: boolean;
  lowerString: string;

  title = "Volunteer Registration";
  volunteerList: Volunteer[];	
	volunteers: DBVolunteer[]; 
  newVolunteer: Volunteer;
	newDBVolunteer: DBVolunteer;

  volunteerOptions = ['Unloading in Parking Lot','Assisting in Setting up Tables'];

  tempVolunteer: Volunteer = {
    firstName: "",
    lastName: "",
    email: "",
    beginTime: new Date(),
    endTime: new Date(),
    position: ""
  }
  
  constructor (private volunteersService: VolunteersService)
  {
		this.volunteersService.getVolunteers().subscribe(volunteers => { 
			this.volunteers = volunteers; 
		});
    this.maxTime.setHours(17);
    this.minTime.setHours(12);
    this.maxTime.setMinutes(0);
    this.minTime.setMinutes(0);
    this.startTime.setHours(12);
    this.startTime.setMinutes(0);
    this.endTime.setHours(12);
    this.endTime.setMinutes(0);
    this.volunteerList = [];
    this.alreadyInList = false;
    this.registrationComplete = true;
    this.lowerString = "";
  }

  onSubmit(): void {
    this.traverseVolunteerList(this.tempVolunteer.firstName);
    if (this.alreadyInList == false)
    {
        this.newVolunteer = new Volunteer(this.tempVolunteer.firstName,this.tempVolunteer.lastName,
        this.lowerString,this.startTime,this.endTime,this.tempVolunteer.position);
        this.volunteerList.push(this.newVolunteer);
        this.registrationComplete = true;
				this.newDBVolunteer = new DBVolunteer(this.tempVolunteer.firstName, this.tempVolunteer.lastName, this.lowerString, this.startTime.toLocaleString('en-US'), this.endTime.toLocaleString('en-US'),this.tempVolunteer.position);
	this.volunteersService.addVolunteer(this.newDBVolunteer).subscribe(volunteer => { 

		});
    }
    else 
    {
        this.alreadyInList = false;  
    }
  }

  toLower(myString: string): boolean {
    this.lowerString = myString;
    return true;
  }

  validEmail(): boolean {
    for (var i = 0; i < this.tempVolunteer.email.length; i++)
    {
      if (this.tempVolunteer.email[i] == '@')
      { return true;}
    }
    if (this.tempVolunteer.email.length == 0)
    return true;

    return false;
  }

  validSameEmail(myEmail: string): boolean {
    for (var i = 0; i < this.volunteerList.length; i++)
    {
      if (myEmail == this.volunteerList[i].email)
      return true;
    }

    return false
  }

  changed(): void {
    console.log('Time changed to:' + this.startTime)
  }

  traverseVolunteerList(fname: string): void {
    for (var i = 0; i < this.volunteerList.length; i++)
    {
       if ( fname == this.volunteerList[i].firstName) 
       {
          this.alreadyInList = true;
       }
    }
  }

}
