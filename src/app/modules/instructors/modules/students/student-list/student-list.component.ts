import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  tableOfStudentList:any;
   constructor(private _studentService:StudentService){

   }

   ngOnInit(): void {
     this.getAllStudent();
   }
   getAllStudent(){
    this._studentService.onGetAllStudents().subscribe({
      next:(res)=>{
        this.tableOfStudentList=res.slice(0,5);
        console.log(this.tableOfStudentList);

      },error:()=>{

      },complete:()=>{

      }
    })

   }

}
