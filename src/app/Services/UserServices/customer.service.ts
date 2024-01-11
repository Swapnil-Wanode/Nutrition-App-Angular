import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/Model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  controllerurl:string="http://localhost:9091/customer/"
  customers : Customer[]=[];
  constructor(private _http: HttpClient) { 

  }

  getAllCustomer():Observable<any[]>{

    return this._http.get<any[]>(this.controllerurl+"viewall");
  }

saveCustomer(c:Customer):Observable<any>{
return this._http.post(this.controllerurl+"save",c,{responseType:"text"});

}

getCustomerBYId(id:number):Observable<any>{

  return this._http.get<any>(this.controllerurl+"viewbyid/"+id);
}

modifyCustomer(id:number,c:Customer): Observable<any>{
  return this._http.put(this.controllerurl+"update/"+id,c);
}

deleteCustomer(id:number):Observable<any>{

  return this._http.delete(this.controllerurl+"delete/"+id);
}
getCount():Observable<any>{
  return this._http.get(this.controllerurl+"getCustomercount");
}



}
