import { Injectable } from '@angular/core';
import{ AngularFireAuth} from"@angular/fire/auth";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

    userLoggedIn:boolean;  
  constructor(private router:Router, private afAuth: AngularFireAuth) { 
      this.userLoggedIn=false;
      this.afAuth.onAuthStateChanged((user)=>{
        if (user){
          this.userLoggedIn=true;
        } else{
          this.userLoggedIn=false;
          
        }
      });
      

  }

  loginUser(email: string, password:string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email,password)
    .then(()=>{
      console.log('login sikeres');
    })
  }
}

