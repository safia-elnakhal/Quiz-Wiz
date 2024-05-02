import { Component, OnInit } from '@angular/core';
import { GrouplistService } from 'src/app/modules/instructors/services/grouplist.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { DeleteGroupComponent } from '../delete-group/delete-group.component';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit{
  tableOfGroupList:any;

constructor(private _GroupListService:GrouplistService,public dialog: MatDialog, private _Toastr:ToastrService){}
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
openDialog(groupId:string) {
 console.log(groupId)
  const dialogRef = this.dialog.open(DeleteGroupComponent, {
   data:groupId
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   console.log(result)
   if(result){
    this.openDeleteGroup(result)
   }
});
}
openDeleteGroup(id:string){
  this._GroupListService.clickDeleteGroup(id).subscribe({
     next:(res)=>{
      console.log(res)
     },
     error:(err)=>{
      console.log(err)
      this._Toastr.error('Not deleted this group','Error');
     },
     complete:()=>{
      this.getAllGroupList()
      this._Toastr.success('The user has been deleted successfully','Success');
     }
  })

}
}


