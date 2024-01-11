import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/Services/UserServices/registration.service';



@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  private _router: any;
  msg!: ' ';
  constructor(private _service : RegistrationService, private _route: Router){ }

  ngOnInit(): void {
  }

  logout(){
    this._router.navigate(["/login"])
  }
}
