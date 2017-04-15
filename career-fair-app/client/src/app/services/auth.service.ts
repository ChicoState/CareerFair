import { Injectable }       from '@angular/core'
import { tokenNotExpired }    from 'angular2-jwt'
import { myConfig }         from './auth.config'


// Avoid name not found warnings
declare var Auth0Lock: any;
//options for the login popup
var options = {
  allowSignUp: false
};

@Injectable()
export class Auth {
    //Configure Auth0Lock
    lock
     = new Auth0Lock(myConfig.clientID, myConfig.domain, options);

    constructor() {
        // Add callback for lock `authenticated` event
        this.lock.on('authenticated', (authResult:any) => {
            localStorage.setItem('id_token', authResult.idToken);
        });
    }

    public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

    public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

    public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };

}