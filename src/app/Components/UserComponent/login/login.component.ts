import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/User';
import { RegistrationService } from 'src/app/Services/UserServices/registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User();
msg='';
  constructor(private _service : RegistrationService, private _route: Router) { }

  ngOnInit(): void { 
  }
  
  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        alert(JSON.stringify(data))
        console.log("response received");
        if(data["role"]=="Customer" || data["role"]=="customer"){
           this._route.navigate(['/customersection'])
        }
        else{
          this._route.navigate(['/admin'])
        }
       
      },
      error =>{
        console.log("Exception occured")
        this.msg="Invalid Credentials, Please enter correct Username & Password"

      }
      );

  }

  signOut():void{
    this._route.navigate(['/logincomponent'])
  }



}
