import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddEditQuizComponent } from '../add-edit-quiz/add-edit-quiz.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.scss']
})
export class ViewQuizComponent implements OnInit {
   
  quizId:any;
  quizData:any;
  constructor(private _QuizService:QuizService ,private _ActivatedRoute:ActivatedRoute, public _Dialog: MatDialog){
    this.quizId = _ActivatedRoute.snapshot.params['_id'];
    console.log(this.quizId);
    
    }
ngOnInit():void{
  this.getQuizById();
  //this.ongetQuizById()
 
 
}
  getQuizById(){
    this._QuizService.onGetQuizById(this.quizId).subscribe({
      next:(res)=>{
        this.quizData=res;
        console.log(res);
        
      }
    })

  }
  quizForm=new FormGroup({
    title:new FormControl('',Validators.required),
    duration:new FormControl('',Validators.required),
    questions_number:new FormControl('',Validators.required),
    score_per_question:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    schadule:new FormControl('',Validators.required),
    difficulty:new FormControl('',Validators.required),
    type:new FormControl('',Validators.required),
    group:new FormControl('',Validators.required)
  })
  // ongetQuizById() {
  //   if (this.quizId) {
  //     this._QuizService.getQuizId(this.quizId).subscribe({
  //       next: (res) => {
  //         console.log(res);
  //         this.onEditForm(res);
  //       },
  //       error: (err) => {
  //         console.log(err);
  //       }
  //     });
  //   }
  // }
  onEditForm(quizDetails: any) {
    this.quizForm.patchValue({
      title: quizDetails.title,
     /* duration: quizDetails.duration,
      questions_number: quizDetails.questions_number,
      score_per_question: quizDetails.score_per_question,
      description: quizDetails.description,
      schadule: quizDetails.schadule,
      difficulty: quizDetails.difficulty,
      type: quizDetails.type,
      group: quizDetails.group*/
    });
  }
onEditQuiz(){
  // console.log(quizId)
      const dialogRef = this._Dialog.open(AddEditQuizComponent, {
        width: '60%',
        height: '65vh'
      
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       console.log(result)
       if(result){
        
       }
    });
    }
}
