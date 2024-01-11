import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/Customer';
import { CustomerService } from 'src/app/Services/UserServices/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  customer : Customer=new Customer();

  
  customers :Customer[]=[];


constructor(private service:CustomerService){
  this.service.getAllCustomer().subscribe((e)=> this.customers=e);
}

getAllCustomer():void{
  this.service.getAllCustomer().subscribe((e)=> this.customers=e);
}


saveCustomer():void{
  this.service.saveCustomer(this.customer).subscribe((e)=>this.customer=e);
}

modifyCustomer():void{
  this.service.modifyCustomer(this.customer.id,this.customer).subscribe((e)=>this.customer=e);
}

deleteCustomer():void{
  this.service.deleteCustomer(this.customer.id).subscribe((e)=>this.customer=e);
}
getCount():void{
this.service.getCount().subscribe((e)=>this.customer=e);
}
}
