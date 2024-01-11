import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DietPlan } from 'src/app/Model/DietPlan';
@Injectable({
  providedIn: 'root'
})
export class DietplanService {
  controllerurl: string = "http://localhost:9091/DietPlan/"
  constructor(private httpclient:HttpClient) {
    
  }
  fetchAllPlans(): Observable<any[]> {
    return this.httpclient.get<any[]>(this.controllerurl + "find");
      }
   
      addPlan(n: DietPlan): Observable<any> {
        return this.httpclient.post(this.controllerurl + "add", n,{responseType:"text"});
   
      }
 
      updatePlan(n: DietPlan): Observable<any> {
        return this.httpclient.put(this.controllerurl + "update", n);
      }
   
      deletePlan(id: number): Observable<any> {
   
        return this.httpclient.delete(this.controllerurl + "delete/" + id);
      }
      getPlanById(id:number):Observable<any>{
        return this.httpclient.get<any>(this.controllerurl+"viewbyid/"+id);
      }
   
   
}