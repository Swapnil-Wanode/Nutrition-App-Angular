import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NutritionPlan } from 'src/app/Model/NutritionPlan';

@Injectable({
  providedIn: 'root'
})
export class NutritionPlanServiceService {

  controllerurl: string = "http://localhost:9091/nutrition/"

  constructor(private httpclient: HttpClient) {

  }

  fetchAllPlans(): Observable<any[]> {

    return this.httpclient.get<any[]>(this.controllerurl + "viewall");
  }

  addPlan(n: NutritionPlan): Observable<any> {
    return this.httpclient.post(this.controllerurl + "save", n);

  }



  updatePlan(n: NutritionPlan): Observable<any> {
    return this.httpclient.put(this.controllerurl + "update", n);
  }

  deletePlan(id: number): Observable<any> {

    return this.httpclient.delete(this.controllerurl + "delete/" + id);
  }

getPlanById(id:number):Observable<any>{

  return this.httpclient.get<any>(this.controllerurl+"viewbyid/"+id);
}
}
