import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GrouplistService } from '../../../services/grouplist.service';
@Component({
  selector: 'app-add-edit-group',
  templateUrl: './add-edit-group.component.html',
  styleUrls: ['./add-edit-group.component.scss']
})
export class AddEditGroupComponent implements OnInit{
  tableOfStudents: any;
ngOnInit(): void {
  this.onGetAllStudents()
}
  userName = localStorage.getItem('userName');
  name: string = '';
  constructor(private _GroupListService:GrouplistService,
    public dialogRef: MatDialogRef<AddEditGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }
  onGetAllStudents(){
    this._GroupListService.getAllStudents().subscribe({
      next:(res)=>{
        this.tableOfStudents=res;
            console.log(res)
  
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
