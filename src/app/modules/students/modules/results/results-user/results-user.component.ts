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

  calculateDuration(startedAt: string, finishedAt: string): string {
    const start = new Date(startedAt);
    const end = new Date(finishedAt);
    const durationInMs = end.getTime() - start.getTime();
    const durationInHours = Math.floor(durationInMs / (1000 * 60 * 60));
    const durationInMinutes = Math.floor((durationInMs % (1000 * 60 * 60)) / (1000 * 60));
    return `${durationInHours} hrs ${durationInMinutes} mins`;
  }

}
