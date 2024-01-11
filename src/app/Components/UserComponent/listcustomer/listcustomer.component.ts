import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Model/Customer';
import { CustomerService } from 'src/app/Services/UserServices/customer.service';

@Component({
  selector: 'app-listcustomer',
  templateUrl: './listcustomer.component.html',
  styleUrls: ['./listcustomer.component.css']
})
export class ListcustomerComponent implements OnInit {

  
  customers :Customer[]=[];


constructor(private m:CustomerService, private _route:Router){
  this.m.getAllCustomer().subscribe((e)=> this.customers=e);
}

signOut():void{
  this._route.navigate(['/logincomponent'])
}


  ngOnInit(): void {
  }

}
