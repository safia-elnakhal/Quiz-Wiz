import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

constructor(private _HttpClient:HttpClient) { }

getLastQuizzesCompleted():Observable<any>{
  return this._HttpClient.get("quiz/result")
}
getGroupByID(id:any):Observable<any>{
  return this._HttpClient.get(`group/${id}`)

}

}
