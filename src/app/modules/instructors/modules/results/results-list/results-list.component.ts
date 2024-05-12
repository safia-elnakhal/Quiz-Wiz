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
    this.getAllGroups();
    this.getAllQuizzes();
  }

  getAllQuizzes() {
    this._ResultsService.getLastQuizzesCompleted().subscribe({
      next: (res) => {
        this.tableOfAllQuizzes = res.map((quiz:any) => {
          const group = this.tableOfGroups.find((group:any) => group._id === quiz.quiz.group);
          const groupName = group ? group.name : 'N/A';
          return { ...quiz, groupName };
        });
        console.log(this.tableOfAllQuizzes);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getAllGroups() {
    this._ResultsService.getGroups().subscribe({
      next: (res) => {
        this.tableOfGroups = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
