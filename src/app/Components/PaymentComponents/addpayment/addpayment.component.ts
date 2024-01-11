import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/Model/Payment';
import { PaymentServiceService } from 'src/app/Services/PaymentServices/payment-service.service';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.css']
})
export class AddpaymentComponent implements OnInit {

  flag:boolean=false;
  open:boolean=false;

  payment: Payment=new Payment();
  payments:Payment[] = []; 
  
  constructor(private m: PaymentServiceService, private _router:Router) {
    
   }

  addPayment():void{
    

    let f = confirm("Please confirm to add the details  ");
    if(f==true){
      this.payment.discount=0;
    this.m.addPayment(this.payment).subscribe((p)=>this.payment= p);
    this._router.navigate(['/logincomponent'])
    }


  }

  ngOnInit(): void {
  }

}
