import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GrouplistService } from '../../../services/grouplist.service';
<<<<<<< HEAD
import { FormGroup, FormControl } from '@angular/forms';
=======
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
>>>>>>> e2df11c1c9edd53c3d5afe81c004906259aed33d
@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.scss']
})
export class AddEditGroupComponent implements OnInit{
  tableOfStudents: any;
  myData:any;
  userName = localStorage.getItem('userName');
  name: string = '';

  addGroup = new FormGroup({
    name:new FormControl(''),
    students:new FormControl(''),
  })

  constructor(private _GroupListService:GrouplistService,
    public dialogRef: MatDialogRef<AddEditGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _Toastr:ToastrService
  ) {
    if(!data){

      this.data = {}
    }
  }

  ngOnInit(): void {
    this.onGetAllStudents()
  }

  onSubmit(data:FormGroup){
    this._GroupListService.onAddGroup(data).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
  
      }
    })
  }

  onGetAllStudents(){
<<<<<<< HEAD
    this._GroupListService.getAllStudentsWithOutGroup().subscribe({
=======
    this._GroupListService.getAllStudentsWithoutGroup().subscribe({
>>>>>>> e2df11c1c9edd53c3d5afe81c004906259aed33d
      next:(res)=>{
        this.tableOfStudents=res;
            console.log(this.tableOfStudents)
  
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
