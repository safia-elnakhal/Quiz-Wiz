import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../services/students.service';
import { StudentList } from '../../../interfaces/student-list';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DeleteStudentComponent } from '../delete-student/delete-student.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{

  tableOfStudentList:StudentList[]=[]
  tableOfStudentWithoutGroup:StudentList[]=[]
  tableOfStudentListGroupTwo:StudentList[]=[]


  constructor(private _studentsService:StudentsService, public _Dialog: MatDialog,
    private _Toastr:ToastrService){}

  ngOnInit(): void {
    this.getAllStudents()
    this.getAllstudentWithoutGroup()
  }
getAllStudents(){
  this._studentsService.onGetAllStudents().subscribe({
    next:(res)=>{
      this.tableOfStudentList=res.slice(0,5)
      this.tableOfStudentListGroupTwo=res.slice(10,15)
      console.log(this.tableOfStudentList)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
clickAddGroup(id:any){
  this._studentsService.onAddToGroup(id).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
getAllstudentWithoutGroup(){
  this._studentsService.onGetStudentWithoutGroup().subscribe({
    next:(res)=>{
      this.tableOfStudentWithoutGroup=res
      console.log(this.tableOfStudentWithoutGroup)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
openDialogStudent(studentId:any) {
  console.log(studentId)
   const dialogRef = this._Dialog.open(DeleteStudentComponent, {
    data:studentId
   });
   dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
    console.log(result)
    if(result){
     this.openDeleteGroup(result)
    }
 });
 }
 openDeleteGroup(id:any){
   this._studentsService.onDeleteStudent(id).subscribe({
      next:(res)=>{
       console.log(res)
      },
      error:(err)=>{
       console.log(err)
       this._Toastr.error('Studnet','Error');
      },
      complete:()=>{
       this.getAllStudents();
       this._Toastr.success('This studnet has been deleted successfully','Success');
      }
   })
 }
}
