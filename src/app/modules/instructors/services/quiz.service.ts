import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private _HttpClient:HttpClient) { }
  clickAddNewQuiz(data:any):Observable<any>{
    return this._HttpClient.post('quiz',data)
  }

  getAllQuizes():Observable<any>{
    return this._HttpClient.get('quiz')
  }
  editQuizId(id:any,data:any):Observable<any>{
    return this._HttpClient.put(`quiz/${id}`,{title:data})}
  
  onGetQuizById(id:any): Observable<any>{
    return this._HttpClient.get(`quiz/${id}`)

  }
}
