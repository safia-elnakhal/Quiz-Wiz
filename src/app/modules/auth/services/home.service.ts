import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) { }
  onGetTopStudent():Observable<any>{
    return this._HttpClient.get('student/top-five')
  }
  onGetTopQuestions():Observable<any>{
    return this._HttpClient.get('quiz/incomming')
  }
}
