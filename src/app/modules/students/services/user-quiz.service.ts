import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JoinQuiz } from '../interfaces/joinQuiz';

@Injectable({
  providedIn: 'root'
})
export class UserQuizService {


constructor(private _HttpClient:HttpClient) { }

getIncommingQuizzes():Observable<any>{
  return this._HttpClient.get('quiz/incomming')
}
onCompletedQuizzesStudent():Observable<any>{
    return this._HttpClient.get('quiz/completed')
} 
onJoinQuiz(data:any):Observable<any>{
  return this._HttpClient.post('quiz/join',data)
}
// onGetAllquestion():Observable<any>{
//   return this._HttpClient.get('question')
// } 
onGetAllQuizzes():Observable<any>{
  return this._HttpClient.get('quiz')
} 
getQuestionsWithOutAnswer(id:string):Observable<any> {
  return this._HttpClient.get(`quiz/without-answers/${id}`);
}
submitQuiz(id:string,answers:any): Observable<any> {
  return this._HttpClient.post(`quiz/submit/${id}`,{"answers":answers});
}

}
