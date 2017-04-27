import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'; 

@Component({
	moduleId: module.id,
  selector: 'layout-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['./footer.component.css']

})
export class FooterComponent  { 
	footerLine1: string;
    footerLine2: string;
    footerLine3: string;
    footerLine4: string;
    footerLine5: string;
	
	constructor( private appComponent: AppComponent) {
		this.footerLine1 = this.appComponent.footerLine1; 
        this.footerLine2 = this.appComponent.footerLine2; 
        this.footerLine3 = this.appComponent.footerLine3; 
        this.footerLine4 = this.appComponent.footerLine4; 
        this.footerLine5 = this.appComponent.footerLine5; 
	}
}