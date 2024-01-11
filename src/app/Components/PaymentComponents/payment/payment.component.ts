import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { Payment } from 'src/app/Model/Payment';
import { PaymentServiceService } from 'src/app/Services/PaymentServices/payment-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  flag:boolean=false;
  open:boolean=false;

  payment: Payment=new Payment();
  payments:Payment[] = []; 
  
  constructor(private service: PaymentServiceService, private r:Router) {
    this.service.listPayments().subscribe((p)=>this.payments=p);
   }

  addPayment():void{
    let f = confirm("Please confirm to add the details  ");
    if(f==true){
    this.service.addPayment(this.payment).subscribe((p)=>this.payment= p);
    }
  }
  updatePayment():void{
    let f = confirm("Please confirm to update the details  ");
    if(f==true){
       this.service.updatePayment(this.payment).subscribe((p)=>this.payment= p);
    }
  }

  deletePayment(py:Payment):void{
    let f = confirm("Do you want to delete ");
    if(f==true){
     this.service.deletePayment(py.id).subscribe((p)=> this.payment=p);
    }
    
  }

  findPaymentsById():void{
     
    // if(){
      this.service.findPaymentsById(this.payment.id).subscribe((p)=>this.payment=p);
    // }
    // else{ 
    //   alert("sorry "+this.payment.id+ " is not available");
    // }
  }

  listPayments():void{
    // if(!this.payments==null){
    this.flag=true;
    this.service.listPayments().subscribe((p)=>this.payments=p);
    // }
    // else{
    //   alert("Payments are not available");
    // }
  }
  updateById(fbi:Payment):void{
    this.service.findPaymentsById(fbi.id).subscribe((p)=>this.payment=p);
  }
  ngOnInit(): void {
    this.open=true;
  }


}
