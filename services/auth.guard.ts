import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from "@angular/fire/auth";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    

    constructor(private router: Router, private afAuth: AngularFireAuth){
      
    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

      return new Promise((resolve, reject)=>{
        this.afAuth.onAuthStateChanged((user)=>{
            if (user){
              resolve(true);
              
            } else{
              console.log('ERR.: nincs bejelentkezve');
              this.router.navigate(['/login']);
              resolve(false);
            }
        });
        

      });
  }
  
}
