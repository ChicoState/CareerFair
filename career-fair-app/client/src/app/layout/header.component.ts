import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'; 

@Component({
	moduleId: module.id,
  selector: 'layout-header',
  templateUrl: 'header.component.html',

})
export class HeaderComponent  { 
	title: string; 
	date: string; 
	location: string; 
	
	constructor( private appComponent: AppComponent) {
		this.title = this.appComponent.title; 
		this.date = this.appComponent.date; 
		this.location = this.appComponent.location;
	}
}
