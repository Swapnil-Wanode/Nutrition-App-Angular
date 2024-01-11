import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeightLog } from 'src/app/Model/WeightLog';

@Injectable({
  providedIn: 'root'
})
export class WeightplanService {

  constructor(private _http:HttpClient) { }

  url="http://localhost:9091/WeightLog";

  addWeightLog(weightLog:WeightLog):Observable<any>{
    return this._http.post(this.url+"/add",weightLog,{responseType:"text"});
  }

  updateWeightLog(weightLog:WeightLog):Observable<any>{
    return this._http.put(this.url+"/update",weightLog,{responseType:"text"});
  }
  deleteWeightLog(id:number):Observable<any>{
    return this._http.delete<any[]>(this.url+"/delete/"+id);
  }
  
  showAll():Observable<any>{
    return this._http.get<any[]>(this.url+"/viewall");
  }

  findWeightLogById(wid:number):Observable<any>{
    return this._http.get<any>(this.url+"/viewbyid/"+wid);
  }
   

}
