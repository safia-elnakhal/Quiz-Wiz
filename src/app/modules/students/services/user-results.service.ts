import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserResultsService {

constructor(private _HttpClient:HttpClient) { }
onGetStudentResults(): Observable<any> {
  return this._HttpClient.get('quiz/result');
}

}
