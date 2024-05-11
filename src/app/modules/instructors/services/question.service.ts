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
  onAddQuestion(data: any): Observable<any>{
    return this._HttpClient.post('question',data)
  }
  onEditQuestion(data: any,id:any): Observable<any>{
    return this._HttpClient.put(`question${id}`,data)
  }
  onGetQuestionById(id:any): Observable<any>{
    return this._HttpClient.get(`question${id}`)
  }
}
