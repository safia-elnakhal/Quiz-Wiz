import { Component,  Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatStepperIntl, MatStepperModule} from '@angular/material/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserQuizService } from '../../../services/user-quiz.service';
import { map, takeWhile, timer } from 'rxjs';




@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit{
  QuizId:string='';
  options!:any;
  questions:any=[]
  answers:any=[]
  timing:any;
  seconds=0
  constructor(private _formBuilder: FormBuilder, private _matStepperIntl: MatStepperIntl,private _ActivatedRoute:ActivatedRoute, private _Toastr:ToastrService,
    public _Dialog: MatDialog, private _Router:Router, private _UserQuizService:UserQuizService) {
      _ActivatedRoute.queryParams.subscribe(params => {this.QuizId=params['quiz']})
      //this.QuizId = _ActivatedRoute.snapshot.params['_id']
       console.log(this.QuizId);
    }
    ngOnInit(): void {
      this.getQuestions(this.QuizId);
    
    }

    getQuestions(id:string){
      this._UserQuizService.getQuestionsWithOutAnswer(id).subscribe({
        next:(res:any)=>{
          console.log(res);
          this.questions=res.data.questions
          console.log(this.questions);
          this.seconds=(res.data.duration) * 60
          this.timing = timer(0, 1000).pipe(
          map(val => (this.seconds - val) * 1000),
          takeWhile(n => n >= 0)
        );
      },})}

      submitAnswers(){
        this._UserQuizService.submitQuiz(this.QuizId,this.answers).subscribe({
          next:(res)=>{
            console.log(res);
          },error:(err)=>{
          this._Toastr.error(err.error.message)
          },complete:()=> {
            this._Toastr.success("you submitted your answers Successfuly")
            this._Router.navigate(["dashboard/student/quizzes-user"]);

          }
        })
       }
        resetForm(){
          this.answers=[]
        }
    
      firstFormGroup = new FormGroup({
          answer:new FormControl(null)
      })
    
     submitAnswer(form:FormGroup,question:string){
      let answer=form.value.answer
      this.answers.push({question,answer})
     }
     
    
}
