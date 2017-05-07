import { Component } from '@angular/core';
import { Auth } from '../services/auth.service';
import { AdminService } from '../services/admin.service'
import { Company } from './admin.companies'


    
@Component({
    moduleId: module.id,
    selector: 'admin',
    providers: [ Auth ],
    templateUrl: './admin.component.html',
    styleUrls:['./admin.component.css']
})

export class AdminComponent {
    companies: Company[]
     constructor(private auth: Auth, private adminService: AdminService){
         this.adminService.getCompanies().subscribe(companies => {
             this.companies = companies;
         });
     }
}
