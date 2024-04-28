import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ForgotPassword } from '../interfaces/forgot-password';
import { ResetPassword } from '../interfaces/reset-password';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private _HttpClient:HttpClient) { }

OnForgotPassword(data:ForgotPassword):Observable<any>{
  return this._HttpClient.post('auth/forgot-password', data)
}
OnResetPassword(data:ResetPassword):Observable<any>{
  return this._HttpClient.post('auth/reset-password', data)
}

}
