import { Component } from '@angular/core';

class Volunteer {
    firstName: string;
    lastName: string;
    constructor (first: string, last: string)
    {
      this.firstName = first;
      this.lastName = last;
    }
}


@Component({
	moduleId: module.id,
  selector: 'volunteer',
  templateUrl: 'volunteer.component.html',
	styleUrls: ['volunteer.component.css']	

})
export class VolunteerComponent  {  
  title = "Volunteer Registration";
  volunteerList: Volunteer[];
  newVolunteer: Volunteer;

  tempVolunteer: Volunteer = {
    firstName: "",
    lastName: ""
  }
  temp2Volunteer: Volunteer = {
    firstName: "",
    lastName: ""
  }
  
  constructor ()
  {
    this.volunteerList = [];
  }

  onSubmit(): void {
    this.newVolunteer = new Volunteer(this.tempVolunteer.firstName,this.tempVolunteer.lastName)
    this.volunteerList.push(this.newVolunteer);
  }


}
