import { Component, OnInit } from '@angular/core';


@Component({
	moduleId: module.id,
  selector: 'parking',
  templateUrl: 'parking.component.html',
	styleUrls: ['./parking.component.css']

})
export class ParkingComponent  {  
	title: string; 
	direction: string; 
	constructor(){ 
		this.title = 'Parking for this app!'; 
		this.direction = 'direction is in your heart'; 	 
	}
}
