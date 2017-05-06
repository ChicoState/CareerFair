import { Component } from '@angular/core';
import { Sponsor } from './sponsors'


@Component({
	moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
	styleUrls:['home.component.css']
})
export class HomeComponent  { 
	title= 'Welcome to the Technical Career Fair Homepage';
  subtitle= ' Sponsored by the College of Engineering';
  paragraph1= 'The Technical Career Fair is an event where many impactful companies come to find some of the best students for their job needs. This includes students majoring in Civil Engineering, Construction Management, Computer Science, Management Information Systems, Electrical Engineering, Computer Engineering, Mechanical Engineering, Mechatronic Engineering, Sustainable Manufacturing, Concrete Industry Management, and Computer Animation and Game Development.';
  paragraph2='This is a great event for students to meet industry leaders and learn more about the many career options that are available to them. Student or employer, attending this event will surely provide a great experience for anyone who attends. Whether it be an internship or full-time employement, this career fair offers exposure to now over 70 companies.';

  sponsors: Sponsor[];

  constructor() {
    this.sponsors = SPONSORS;
  }
  

}


export const SPONSORS: Sponsor[] = [
  {url: "app/assets/companyLogos/cmLogo.png"},
  {url: "app/assets/companyLogos/aja.png"},
  {url: "app/assets/companyLogos/barry.png"},
  {url: "app/assets/companyLogos/calix.png"},
  {url: "app/assets/companyLogos/caltrans.png"},
  {url: "app/assets/companyLogos/galil.png"},
  {url: "app/assets/companyLogos/gp.png"},
  {url: "app/assets/companyLogos/hp.png"},
  
]