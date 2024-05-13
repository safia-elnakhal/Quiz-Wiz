import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

constructor(private _HttpClient:HttpClient) { }

getResultsCompleted():Observable<any>{
  return this._HttpClient.get("quiz/result")
}
getGroups():Observable<any>{
  return this._HttpClient.get(`group`)

}

}
