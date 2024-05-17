import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GrouplistService {

  constructor(private _HttpClient:HttpClient) { }
  getAllGroups():Observable<any>{
   return this._HttpClient.get('group')
  }
  getAllStudents():Observable<any>{
    return this._HttpClient.get('student')
  }
  getAllStudentsWithOutGroup():Observable<any>{
    return this._HttpClient.get('student/without-group')
  }
  clickDeleteGroup(id:string):Observable<any>{
    return this._HttpClient.delete(`group/${id}`)
  }
  onAddGroup(data: any): Observable<any>{
    return this._HttpClient.post('group',data)
  }
  onEditGroup(data: any, id:any): Observable<any>{
    return this._HttpClient.put(`group/${id}`, data)
  }
}
