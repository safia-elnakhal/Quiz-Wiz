import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _HttpClient:HttpClient) { }
  onGetAllStudents():Observable<any>{
   return this._HttpClient.get('student')
  }
  onGetStudentWithoutGroup():Observable<any>{
    return this._HttpClient.get('student/without-group')

  }
  onAddToGroup(id:any):Observable<any>{
    return this._HttpClient.get(`student/${id}/${id}`)
  }
  onEditStudent(data:any,id:any):Observable<any>{
    return this._HttpClient.put(`student/${id}/${id}`,data)
  }
  onDeleteStudent(id:any):Observable<any>{
    return this._HttpClient.delete(`student/${id}`)

  }
  onDeleteStudentFromGroup(id:any, idGroup:any):Observable<any>{
    return this._HttpClient.delete(`student/${id}/${idGroup}`)

  }
}

//65cf69778f25f1b30030d76b
