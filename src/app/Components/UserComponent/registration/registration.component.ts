import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { User } from 'src/app/Model/User';
import { RegistrationService } from 'src/app/Services/UserServices/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name:string="Customer";

user =new User();
msg=' ';
  constructor(private _service : RegistrationService,private _router : Router) { }

  ngOnInit(): void {
  }
  
  registerUser(){
    this.user.role="Customer";
    this._service.registerUserFromremote(this.user).subscribe(
      data =>{
        console.log("response received");
        this._router.navigate(['/addcustomer'])

      },
      error =>{
        console.log(error.message);
        this.msg=error.message;
        

      }

    )
  }

}
