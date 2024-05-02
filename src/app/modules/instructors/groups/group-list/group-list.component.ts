import { Component, OnInit } from '@angular/core';
import { GrouplistService } from 'src/app/modules/dashboard/services/grouplist.service';

import { DeleteGroupComponent } from '../delete-group/delete-group.component';
@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit{
  tableOfGroupList:any;
constructor(private _GroupListService:GrouplistService){}
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

}
