import { Component } from '@angular/core';

@Component({
  selector: 'parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class parkingComponent {
  title: string;
  direction: string;

  constructor(){
    this.title = 'this is the title';
    this.direction = 'direction is in your heart';

  }
  
}
