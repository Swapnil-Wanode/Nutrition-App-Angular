import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/Model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 
url="";
  constructor(private http:HttpClient) { }
  loginService(login:Login){
    //alert("loginService: "+JSON.stringify(login));
    return this.http.post(this.url+"login.do", login);
  }
}
