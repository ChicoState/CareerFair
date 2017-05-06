import { Component } from '@angular/core';
import { Auth } from '../services/auth.service';
import { CompaniesService } from '../services/companies.service'
import { Company } from '../companies/companies'


    
@Component({
    moduleId: module.id,
    selector: 'admin',
    providers: [ Auth ],
    templateUrl: './admin.component.html',
    styleUrls:['./admin.component.css']
})

export class AdminComponent {
    companies: Company[]
     constructor(private auth: Auth, private companiesService: CompaniesService){
         this.companiesService.getCompanies().subscribe(companies => {
             this.companies = companies;

             for(var i =0; i < this.companies.length; i++){
                this.companies[i].desiredPositions = this.setupString(this.companies[i].desiredPositions);
                this.companies[i].desiredMajors = this.setupString(this.companies[i].desiredMajors);
             }

         });
     } // For admin login
     setupString(toTransform: string){
         var toReturn = "";
         var afterSplit: string[];
         if(toTransform.indexOf(",",0)>0) {
             afterSplit = toTransform.split(",");
             for(var i=0; i<afterSplit.length; i++){
                 var part = afterSplit[i];
                 var trans = this.toDisplay(afterSplit[i]);
                 if(i == 0){
                    toReturn = toReturn + trans;
                 }
                 else {
                     toReturn = toReturn + ", " + trans;
                 }
             }
         }    
         else{
             toReturn = this.toDisplay(toTransform);
         }  
         return toReturn;
     }

     toDisplay(displayMe:string){
        if (displayMe.includes("cagd"))
            return "Computer Animation and Game Development";
        else if (displayMe.includes("cimt"))
            return "Concrete Industry Management";
        else if (displayMe.includes("cmgt"))
            return "Construction Management";
        else if (displayMe.includes("cins"))
            return "Computer Information Systems";
        else if (displayMe.includes("civl"))
            return "Civil Engineering";
        else if (displayMe.includes("csci"))
            return "Computer Science";
        else if (displayMe.includes("eece"))
            return "Electrical Engineering";
        else if (displayMe.includes("meca"))
            return "Mechatronic Engineering";
        else if (displayMe.includes("mech"))
            return "Mechanical Engineering";
        else if (displayMe.includes("mins"))
            return "Management Information Systems";
        else if (displayMe.includes("smfg"))
            return "Sustainable Manufacturing";

        /* Position types */
        else if (displayMe.includes("co_op"))
            return "CO OP";
        else if (displayMe.includes("full_time"))
            return "Full Time Position";
        else if (displayMe.includes("summer_internship"))
            return "Summer Internship";

        /* Registration types */
        else if (displayMe == "resumeBook")	
            return "Resume";
        else if (displayMe == "table") 
            return "Table";
        else if (displayMe == "resumeBookAndTable")
            return "Resume Book and Table";    
     }
}
