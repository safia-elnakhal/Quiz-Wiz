import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPassword } from '../interfaces/forgot-password';
import { ResetPassword } from '../interfaces/reset-password';

import { Register } from '../interfaces/register';
import { jwtDecode } from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  role : string | any = '';

constructor(private _HttpClient:HttpClient) {
  if(localStorage.getItem('userToken')!==null){
    this.getProfile();
    
  }
 }
 getProfile(){
  let encoded:any=localStorage.getItem('userToken');
  console.log(encoded);
  let decoded:any=jwtDecode(encoded);
  localStorage.setItem('userRole',decoded.role);
  localStorage.setItem('userName',decoded.first_name)
  console.log(decoded)
  this.getRole();
}
getRole(){
  if(localStorage.getItem('userToken')!==null && localStorage.getItem('userRole')!==null){
    this.role = localStorage.getItem('userRole') 
  }
  
 
}




constructor(private _HttpClient:HttpClient) { }
onSignUp(data:Register):Observable<any>{
return this._HttpClient.post('auth/register',data)
}

OnForgotPassword(data:ForgotPassword):Observable<any>{
  return this._HttpClient.post('auth/forgot-password', data)
}
OnResetPassword(data:ResetPassword):Observable<any>{
  return this._HttpClient.post('auth/reset-password', data)
}

}
