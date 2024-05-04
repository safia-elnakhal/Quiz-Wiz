import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _HttpClient:HttpClient ) { }
 
  onGetAllStudents():Observable<any>{
    return this._HttpClient.get('student')

  }

}
