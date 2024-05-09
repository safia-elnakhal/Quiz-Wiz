import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { DeleteQuestionComponent } from '../delete-question/delete-question.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddUpdateQuestionsComponent } from '../add-update-questions/add-update-questions.component';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit{
  tableOfAllQuestions:any[]=[]
  tableOfQuestion:any
  

  constructor(private _QuestionService:QuestionService, public _Dialog: MatDialog, private _Toastr:ToastrService){}
  ngOnInit(): void {
    this.getAllQuestions()
  }
getAllQuestions(){
  this._QuestionService.onGetAllQuestions().subscribe({
    next:(res)=>{
     this.tableOfAllQuestions=res.slice(0,8);
      console.log(this.tableOfAllQuestions)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
openDeleteQuestion(questionoId:string) {
  console.log(questionoId)
   const dialogRef = this._Dialog.open(DeleteQuestionComponent, {
    width: '50%',
    height: "45vh",
    data:questionoId
   });
   dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
   if(result){
    this.onClickDeleteQuestion(result)
   }
  
 });
 }
onClickDeleteQuestion(id:string){
  this._QuestionService.onDeleteQuestion(id).subscribe({
   next:(res)=>{
    console.log(res)
   },
   error:(err)=>{
    console.log(err)
    this._Toastr.error('Not deleted this Question','Error');
   },
   complete:()=>{
       this._Toastr.success('Question deleted successfully','Deleted')
   }
  })
}


openAddQuestionDialog():void {

  const dialogRef = this._Dialog.open(AddUpdateQuestionsComponent, {
   
    width: '50%',
    height: "60vh",
  });

  dialogRef.afterClosed().subscribe((result) => {
    console.log('The dialog was closed');
    console.log(result);
    
    if (result) {
      this.addQuestion(result);
    }
  }
);
}
addQuestion(data:any) {
  
  this._QuestionService.onAddQuestion(data).subscribe({
    next: (res) => {
 
      this.tableOfAllQuestions=res.data;
      console.log(res);
      this._Toastr.success('Question', ' Added Group Success');
    },
    error: (err) => {
      console.log(err);
      this._Toastr.error('Question', ' Added Group field');
    },
    complete: () => {
      this.getAllQuestions();
    },
  });
}
}
