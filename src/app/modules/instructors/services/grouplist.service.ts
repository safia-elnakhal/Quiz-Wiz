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
  clickDeleteGroup(id:string):Observable<any>{
    return this._HttpClient.delete(`group/${id}`)
  }
  onAddGroup(data: any): Observable<any>{
    return this._HttpClient.post('group', data)
  }
}
