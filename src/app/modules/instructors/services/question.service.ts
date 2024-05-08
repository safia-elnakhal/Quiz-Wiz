import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _HttpClient:HttpClient) { }
  onGetAllQuestions():Observable<any>{
    return this._HttpClient.get('question')
  }
  onDeleteQuestion(id:string):Observable<any>{
    return this._HttpClient.delete(`question/${id}`)
  }
}
