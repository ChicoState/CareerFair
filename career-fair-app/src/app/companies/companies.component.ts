import { Component } from '@angular/core';

@Component({
  selector: 'companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent {
  title: string;
  companies: Company[];

  constructor() {
    this.title = "List of Companies!";
    this.companies = COMPANIES;
  }

}

export const COMPANIES: Company[] = [
  {name: 'AJA Video Systems, Inc.', majorDesired: 'Electrical Engineering', position: 'Fulltime', website: 'http://www.aja.com'},
  {name: 'Allana Buick & Bers', majorDesired: 'Civil Engineering', position: 'Fulltime', website: 'http://abbae.com'},
  {name: 'Altec Industries', majorDesired: 'Mechanical Engineering', position: 'Fulltime', website: 'http://altec.com'},
  {name: 'American Civil Constructors West Coast LLC', majorDesired: 'Civil Engineering', position: 'Fulltime', website: 'http://www.accbuilt.com'},
  {name: 'Aruba Networks an HPE Company', majorDesired: 'Electrical Engineering', position: 'Fulltime', website: 'http://www.arubanetwork.com'}
];

interface Company {
  name: string;
  majorDesired: string;
  position: string;
  website: string;
}