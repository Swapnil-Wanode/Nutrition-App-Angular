import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/Customer';
import { CustomerService } from 'src/app/Services/UserServices/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  customer : Customer=new Customer();

  
  customers :Customer[]=[];


constructor(private service:CustomerService){
  this.service.getAllCustomer().subscribe((e)=> this.customers=e);
}


modifyCustomer():void{
  this.service.modifyCustomer(this.customer.id,this.customer).subscribe((e)=>this.customer=e);
}


  ngOnInit(): void {
  }

}
