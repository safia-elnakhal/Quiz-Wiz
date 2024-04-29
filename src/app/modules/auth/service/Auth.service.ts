import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPassword } from '../interfaces/forgot-password';
import { ResetPassword } from '../interfaces/reset-password';
import { Register } from '../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
