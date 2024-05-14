import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _HttpClient:HttpClient) { }
  getProfileInstructor(data:any):Observable<any>{
    return this._HttpClient.put('instructor',data)
  }
  getProfileStudent(data:any):Observable<any>{
    return this._HttpClient.put('student',data)
  }
}
