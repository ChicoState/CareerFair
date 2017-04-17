import { Component } from '@angular/core';
import { Auth } from '../services/auth.service';


    
@Component({
    moduleId: module.id,
    selector: 'admin',
    providers: [ Auth ],
    templateUrl: './admin.component.html',

})

export class AdminComponent {
     constructor(private auth: Auth){} // For admin login
}
