import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Model/Customer';
import { CustomerService } from 'src/app/Services/UserServices/customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {

  customer : Customer=new Customer();

  
  customers :Customer[]=[];


constructor(private m:CustomerService,private _router : Router){
  // this.m.getAllCustomer().subscribe((e)=> this.customers=e);
}


saveCustomer():void{
  this.m.saveCustomer(this.customer).subscribe((e)=>this.customer=e);
  this._router.navigate(['/addpayment'])
}


  ngOnInit(): void {
  }

}
