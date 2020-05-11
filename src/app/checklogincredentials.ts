import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class CheckLoginCredentials implements CanActivate {
    constructor(private router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        let userName = localStorage.getItem('userName');
        let regusername = localStorage.getItem('regusername');
        let pass = localStorage.getItem('pass');
        let regpassword = localStorage.getItem('regpassword');

        if ((userName && pass) === (regusername && regpassword)) {
            console.log("Authorized user");
            return true;
        } else {
            console.log("UnAuthorized user!!");
            this.router.navigateByUrl('/errorpage');
            return false;
        }
    }
}