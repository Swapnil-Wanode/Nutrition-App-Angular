import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

  controllerurl:string="http://localhost:9091/employee/"
//   employees : Employee[]=[];
//   constructor(private h: HttpClient) { 

//   }

//   getAllEmployee():Observable<any[]>{

//     return this.h.get<any[]>(this.controllerurl+"getAllEmployee");
//   }

// saveEmployee(e:Employee):Observable<any>{
// return this.h.post(this.controllerurl+"saveEmployee",e,{responseType:"text"});

// }

// getEmployeeBYId(id:number):Observable<any>{

//   return this.h.get<any>(this.controllerurl+"getemployeebyid/"+id);
// }

// modifyEmployee(e:Employee): Observable<any>{
//   return this.h.put(this.controllerurl+"updateEmployee",e);
// }

// deleteEmployee(id:number):Observable<any>{

//   return this.h.delete(this.controllerurl+"deleteEmployee/"+id);
// }
// getCount():Observable<any>{
//   return this.h.get(this.controllerurl+"getemployeecount");
// }
}