import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ResultsService } from 'src/app/modules/instructors/services/results.service';
import { UserResultsService } from '../../../services/user-results.service';

@Component({
  selector: 'app-results-user',
  templateUrl: './results-user.component.html',
  styleUrls: ['./results-user.component.scss']
})
export class ResultsUserComponent {
  tableOfResult:any[]=[]
  groupId:any
  tableOfGroups:any
  constructor(private _UserResultsService:UserResultsService){}
  ngOnInit(): void {
    this.getAllResults();
  }

  getAllResults(){
    this._UserResultsService.onGetStudentResults().subscribe({
      next:(res)=>{
        console.log(res);
        this.tableOfResult=res
      },error:(err)=>{
  
      },complete:()=> {
        
      }
    })
  }

  


}
