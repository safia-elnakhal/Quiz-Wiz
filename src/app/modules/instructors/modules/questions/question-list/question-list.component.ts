import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { DeleteQuestionComponent } from '../delete-question/delete-question.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddUpdateQuestionsComponent } from '../add-update-questions/add-update-questions.component';
import { QuestionDetailsComponent } from '../question-details/question-details.component';
@Component({
  selector: 'app-question-list',
  templateUrl:'./question-list.component.html',
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
     this.tableOfAllQuestions=res;
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
       this.getAllQuestions()
   }
  })
}


openAddQuestionDialog():void {

  const dialogRef = this._Dialog.open(AddUpdateQuestionsComponent, {
   
    width: '50%',
    height: "65vh",
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

openQuestionDetailsDialog(item:any):void {

  const dialogRef = this._Dialog.open(QuestionDetailsComponent, {
   data:item,
    width: '50%',
    height: "65vh",
  });

  dialogRef.afterClosed().subscribe((result) => {
    console.log('The dialog was closed');
    console.log(result);
    
    if (result) {
      this.getAllQuestions();
    }
  }
);
}
addQuestion(data:any) {
  this._QuestionService.onAddQuestion(data).subscribe({
    next: (res) => {
      // this.tableOfAllQuestions=res.data;
      console.log(res);
      
    },
    error: (err) => {
      console.log(err);
      this._Toastr.error('Question', ' Added field');
    },
    complete: () => {
      this._Toastr.success('Question', ' Added Success');
      this.getAllQuestions();

    },
  });
}
}