import { Component } from '@angular/core';	
	@Component({
	  selector: 'layout-footer',
	  templateUrl: './footer.component.html'
	})
	export class FooterComponent {
	  	MESA_location: string;
	  	CSUC_name: string;
	  	CSUC_address: string;
	  	phone_number:string;

		constructor(){
		this.MESA_location = 'MESA Programs, OConnell 114';
		this.CSUC_name = 'California State University, Chico';
		this.CSUC_address = '400 West First Street Chico, CA 95929-0100';
		this.phone_number = '(530) 898-4017' ;
	}
}