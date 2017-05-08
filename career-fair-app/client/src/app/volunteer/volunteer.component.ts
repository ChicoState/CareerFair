import { Component,Input } from '@angular/core';
import { TimepickerModule } from 'ng2-bootstrap/timepicker';
import { AlertModule } from 'ng2-bootstrap/alert';
import { ModalModule } from 'ng2-bootstrap/modal'
import { VolunteersService } from '../services/volunteers.service'; 
import { Volunteer } from './volunteer'

export class DBVolunteer { 
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
  styleUrls: ['./volunteer.component.css'],
})

export class VolunteerComponent {
  title = "Volunteer Registration";
  public startTime: Date = new Date();
  public endTime: Date = new Date();
  
  minStep: number = 30;
  maxTime: Date = new Date();
  minTime: Date = new Date();
  volunteersLength: number;
	
	volunteers: DBVolunteer[]; 
	newDBVolunteer: DBVolunteer;
  tempVolunteer: Volunteer;

  volunteerOptions = ['Unloading in Parking Lot','Assisting in Setting up Tables'];
  
  constructor (private volunteersService: VolunteersService)
  {
		this.volunteersService.getVolunteers().subscribe(volunteers => { 
			this.volunteers = volunteers; 
      this.volunteersLength = volunteers.length;
		});

    this.maxTime.setHours(17);
    this.minTime.setHours(12);
    this.maxTime.setMinutes(0);
    this.minTime.setMinutes(0);
    this.startTime.setHours(12);
    this.startTime.setMinutes(0);
    this.endTime.setHours(13);
    this.endTime.setMinutes(0);
    this.tempVolunteer = new Volunteer("","","",this.startTime,this.endTime,"")

  }

  onSubmit(): void {
		this.newDBVolunteer = new DBVolunteer(this.tempVolunteer.firstName, this.tempVolunteer.lastName, this.tempVolunteer.lowerString, this.tempVolunteer.beginTime.toLocaleTimeString(), this.tempVolunteer.endTime.toLocaleTimeString(),this.tempVolunteer.position);
	  this.volunteersService.addVolunteer(this.newDBVolunteer).subscribe(volunteer => { });
  }

  validSameEmail(myEmail: string): boolean {
    for (var i = 0; i < this.volunteersLength; i++)
    {
      if (myEmail == this.volunteers[i].email)
      return true;
    }

    return false
  }

  changed(): void {
    console.log('Time changed to:' + this.startTime)
  }
}
