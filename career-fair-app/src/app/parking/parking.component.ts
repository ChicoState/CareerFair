import { Component } from '@angular/core';

@Component({
  selector: 'parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent {
  title: string;
  direction: string;

  constructor(){
    this.title = 'this is the title';
    this.direction = 'direction is in your heart';

  }
  
}
