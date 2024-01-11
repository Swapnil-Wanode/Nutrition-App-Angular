import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Payment } from 'src/app/Model/Payment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {

  constructor(private _http:HttpClient) { }

  url="http://localhost:9091/pay";

  addPayment(payment:Payment):Observable<any>{
    return this._http.post(this.url+"/add",payment,{responseType:"text"});
  }
  updatePayment(payment:Payment):Observable<any>{
    return this._http.put(this.url+"/update",payment,{responseType:"text"});
  }
  deletePayment(id:number):Observable<any>{
    return this._http.delete<any[]>(this.url+"/delete/"+id);
  }
  findPaymentsById(id:number):Observable<any>{
    return this._http.get<any>(this.url+"/viewbyid/"+id);
  }
  listPayments():Observable<any>{
    return this._http.get<any[]>(this.url+"/viewallpayments");
  }



}
