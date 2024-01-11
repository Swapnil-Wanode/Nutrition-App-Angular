import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/Model/Payment';
import { PaymentServiceService } from 'src/app/Services/PaymentServices/payment-service.service';

@Component({
  selector: 'app-listpayment',
  templateUrl: './listpayment.component.html',
  styleUrls: ['./listpayment.component.css']
})
export class ListpaymentComponent implements OnInit {


  payments:Payment[] = []; 
  
  constructor(private m: PaymentServiceService, private r:Router) {
    this.m.listPayments().subscribe((p)=>this.payments=p);
   }
  
    

  ngOnInit(): void {
  }

}
