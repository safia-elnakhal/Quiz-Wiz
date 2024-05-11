import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../../services/results.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss']
})
export class ResultsListComponent implements OnInit {
  tableOfAllQuizzes:any[]=[]
  groupId:any
  tableOfGroups:any
  constructor(private _ResultsService:ResultsService, private _Toastr:ToastrService){}
  ngOnInit(): void {
    this.getAllQuizzes();
      
  }
  getAllQuizzes(){
    this._ResultsService.getLastQuizzesCompleted().subscribe({
      next:(res)=>{
       this.tableOfAllQuizzes=res;
        console.log(this.tableOfAllQuizzes)
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }

  getAllGroups(){
    this._ResultsService.getGroupByID(this.groupId).subscribe({
      next:(res)=>{
       this.tableOfGroups = res;
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }

}
