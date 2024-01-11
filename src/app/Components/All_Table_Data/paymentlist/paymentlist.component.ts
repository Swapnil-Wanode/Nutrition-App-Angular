import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/Model/Payment';
import { PaymentServiceService } from 'src/app/Services/PaymentServices/payment-service.service';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})
export class PaymentlistComponent implements OnInit {

  payment: Payment=new Payment();
  payments:Payment[] = []; 
  
  constructor(private m: PaymentServiceService, private r:Router) {
    this.m.listPayments().subscribe((p)=>this.payments=p);
   }

  ngOnInit(): void {
  }

}
