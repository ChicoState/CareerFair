import { Component } from '@angular/core';
import { Auth } from '../services/auth.service';
import { AdminService } from '../services/admin.service'
import { Company } from './admin.companies'
import { ResumesService } from '../services/resumes.service'; 
import { Resume } from './admin.resumes'


    
@Component({
    moduleId: module.id,
    selector: 'admin',
    providers: [ Auth ],
    templateUrl: './admin.component.html',
    styleUrls:['./admin.component.css']
})

export class AdminComponent {
    companies: Company[]
    resumes: Resume[]
    constructor(private auth: Auth, private adminService: AdminService, private resumesService:ResumesService){
        this.adminService.getCompanies().subscribe(companies => {
            this.companies = companies;
        });
        this.resumesService.getResumes().subscribe(resumes => {
            this.resumes = resumes;
        });
     }
}
