import { Component, OnInit } from '@angular/core';	
// importing the header information
import { AppComponent } from '../app.component';

	@Component({
	  selector: 'layout-header',
	  templateUrl: './header.component.html'
	})
	export class HeaderComponent {
		title: string;
		date: string;
		location: string;
//setting the header information to a private variable
//now header info can be set to local var
//and  be referenced from html file
	  constructor( private appComponent: AppComponent) {
	  	this.title = this.appComponent.title;
	  	this.date = this.appComponent.date;
	  	this.location = this.appComponent.location;
	  }
      }