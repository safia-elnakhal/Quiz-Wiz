import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _HttpClient:HttpClient) { }
  onGetAllStudents():Observable<any>{
   return this._HttpClient.get('student')
  }
}
