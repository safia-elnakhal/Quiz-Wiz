import { Component, OnInit } from '@angular/core';
import { GrouplistService } from 'src/app/modules/instructors/services/grouplist.service';

import { DeleteGroupComponent } from '../delete-group/delete-group.component';
import { AddEditGroupComponent } from '../add-edit-group/add-edit-group.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit{
  tableOfGroupList:any;
 
  constructor(private _GroupListService: GrouplistService,
    public _Dialog: MatDialog,
   private _Toastr:ToastrService) {
  
}
ngOnInit(): void {
  this.getAllGroupList()
}
getAllGroupList(){
  this._GroupListService.getAllGroups().subscribe({
    next:(res)=>{
    
      this.tableOfGroupList=res.slice(0,5);
      console.log(this.tableOfGroupList)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
onDeleteGroup(id:string){
  this._GroupListService.clickDeleteGroup(id).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    }

  })
  }
  openAddGroupDialog() {
    const dialogRef = this._Dialog.open(AddEditGroupComponent, {
      width: '50%',
      height: "45vh"
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      
      if (result) {
        this.addGroup(result);
      }
    });
  }
  addGroup(data:any) {
    this._GroupListService.onAddGroup(data).subscribe({
      next: (res) => {
        console.log(res);
        this._Toastr.success('Group', ' Added Group Success');
      },
      error: (err) => {
        console.log(err);
        this._Toastr.error('Group', ' Added Group field');
      },
      complete: () => {
        this.getAllGroupList();
      },
    });
  }

 }


