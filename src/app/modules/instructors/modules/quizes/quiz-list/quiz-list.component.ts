import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddEditQuizComponent } from '../add-edit-quiz/add-edit-quiz.component';
import { MatDialog } from '@angular/material/dialog';
import { QuizService } from '../../../services/quiz.service';
import { UserQuizService } from 'src/app/modules/students/services/user-quiz.service';
@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit{
  tableOfQuiz:any[]=[];
  comletedQuizzes:any[]=[];

  constructor(private _Router:Router, private _Toastr:ToastrService, public _Dialog: MatDialog, private _QuizService:QuizService,private _UserQuizService:UserQuizService){}
  ngOnInit(): void {
    this.getIncommingQuizzes();
    this.getCompletedQuizzesStudent();
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

  clickEditQuiz(){
  // console.log(quizId)
    const dialogRef = this._Dialog.open(AddEditQuizComponent, {
      width: '60%',
      height: '65vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     console.log(result)
     if(result){
      this.onEditQuiz(result)
     }
  });
  }
  onEditQuiz(id:any){
    this._QuizService.onGetQuizById(id).subscribe({
      next:(res)=>{
        console.log(res)
      }
    })
  
    }
  
  getIncommingQuizzes(){
    this._UserQuizService.getIncommingQuizzes().subscribe({
      next:(res)=>{
      
        this.tableOfQuiz=res.slice(0,2);;
        console.log(this.tableOfQuiz)

      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  
    

  getCompletedQuizzesStudent(){
    this._UserQuizService.onCompletedQuizzesStudent().subscribe({
      next:(res)=>{
        this.comletedQuizzes=res
            console.log(res);
            
      },error:()=>{

      },complete:()=>{

      }
    })
  }
  
}

