import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{
  tableOfStudentList:any[]=[]
  constructor(private _studentsService:StudentsService){}
  ngOnInit(): void {
    this.getAllStudents()
  }
getAllStudents(){
  this._studentsService.onGetAllStudents().subscribe({
    next:(res)=>{
      this.tableOfStudentList=res.slice(0,5)
      console.log(this.tableOfStudentList)

    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
