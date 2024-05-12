import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserQuizService {

constructor(private _Httpclient:HttpClient) { }
  onCompletedQuizzesStudent():Observable<any>{
    return this._Httpclient.get('quiz/completed')
  } 
}
