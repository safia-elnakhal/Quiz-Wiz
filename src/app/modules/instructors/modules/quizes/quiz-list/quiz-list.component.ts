import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddEditQuizComponent } from '../add-edit-quiz/add-edit-quiz.component';
import { MatDialog } from '@angular/material/dialog';
import { QuizService } from '../../../services/quiz.service';
@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit{
  constructor(private _Router:Router, private _Toastr:ToastrService, public _Dialog: MatDialog, private _QuizService:QuizService){}
  ngOnInit(): void {
    
  }
openAddQuizDialog(){

  const dialogRef = this._Dialog.open(AddEditQuizComponent, {
    width: '60%',
    height: '65vh'
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   console.log(result)
   if(result){
   this.onAddQuiz(result)
   }
});
}
onAddQuiz(data:any){
  this._QuizService.clickAddNewQuiz(data).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err);
      this._Toastr.error('Quiz', ' Added field');
    },
    complete:()=>{
      this._Toastr.success('Quiz', ' Added Success');
    }
  })
  }
}
