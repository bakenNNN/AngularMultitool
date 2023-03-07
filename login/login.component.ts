import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AngularFireAuth} from "@angular/fire/auth";
import { ToastrService } from 'ngx-toastr';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  staticAlertClosed5 = true;
  loginForm:FormGroup;
  firebaseErrorMsg:string;

  constructor(private authService: AuthService, private router:Router, private afAuth:AngularFireAuth, private toastr: ToastrService) {
            this.loginForm=new FormGroup({
              'email': new FormControl('', [Validators.required, Validators.email]),
              'password': new FormControl('', Validators.required)
            });
            this.firebaseErrorMsg ='';
   }

  ngOnInit(): void {
    
  }
  loginUser(){
    if (this.loginForm.invalid){
      this.showErrorNotif('top','center');}
    this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).then ((result)=>{
      if(result == null){
        this.staticAlertClosed5 = false;
        this.router.navigate(['/dashboard']);
        this.showNotification('top','center');
      }

    })

  }


  

  
  showNotification(from, align){


      this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span><b>Sikeres belépés!</b>', '', {
         disableTimeOut: false,
         closeButton: true,
         enableHtml: true,
         toastClass: "alert alert-success alert-with-icon",
         positionClass: 'toast-' + from + '-' +  align
       });
      
}

showErrorNotif(from, align){
  this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span><b>Sikertelen belépés!</b> (Rossz felhasználónév/jelszó?)', '', {
  disableTimeOut: true,
  enableHtml: true,
  closeButton: true,
  toastClass: "alert alert-danger alert-with-icon",
  positionClass: 'toast-' + from + '-' +  align
});
}
}

