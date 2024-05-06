import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
import { AddEditStudentComponent } from '../add-edit-student/add-edit-student.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentList } from '../../../interfaces/student-list';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{
  tableOfStudentList:StudentList[]=[]
  tableOfStudentListGroup:StudentList[]=[]
  tableOfStudentListGroupTwo:StudentList[]=[]
  constructor(private _studentsService:StudentsService,public dialog: MatDialog){ 
  }
  ngOnInit(): void {
    this.getAllStudents()
  }
getAllStudents(){
  this._studentsService.onGetAllStudents().subscribe({
    next:(res)=>{
      this.tableOfStudentList=res.slice(0,5)
      this.tableOfStudentListGroup=res.slice(15,20)
      this.tableOfStudentListGroupTwo=res.slice(10,15)
      console.log(this.tableOfStudentList)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
