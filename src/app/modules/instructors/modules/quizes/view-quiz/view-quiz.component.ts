import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddEditQuizComponent } from '../add-edit-quiz/add-edit-quiz.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.scss']
})
export class ViewQuizComponent implements OnInit {
data:any
   item:any
  quizId:any;
  quizData:any;
  quizForm: FormGroup | any;

  constructor(private _QuizService:QuizService ,private _ActivatedRoute:ActivatedRoute, public _Dialog: MatDialog,  private _Toastr:ToastrService){
    this.quizId = _ActivatedRoute.snapshot.params['_id'];
    console.log(this.quizId);
    
    }
ngOnInit():void{
  this.getQuizById();
  this.clickEditQuiz(this.quizData)
 
 
}
  getQuizById(){
    this._QuizService.onGetQuizById(this.quizId).subscribe({
      next: (res) => {
        this.quizData = res;
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  // onEditForm(quizDetails: any) {
  //   this.quizForm.patchValue({
  //     title: quizDetails.title,
  //    /* duration: quizDetails.duration,
  //     questions_number: quizDetails.questions_number,
  //     score_per_question: quizDetails.score_per_question,
  //     description: quizDetails.description,
  //     schadule: quizDetails.schadule,
  //     difficulty: quizDetails.difficulty,
  //     type: quizDetails.type,
  //     group: quizDetails.group*/
  //   });
  // }
  
onEditQuiz(quizData:any){
      console.log(quizData)
      const dialogRef = this._Dialog.open(AddEditQuizComponent, {
        width: '60%',
        height: '65vh',
        data:quizData
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       console.log(result)
       if(result){
        quizData.title = result.title;
        quizData.duration = result.duration;
        // quizData.group=result.group;
        // quizData.description=result.description;
       
        // quizData.schadule=result.schadule;
        // quizData.score_per_question=result.score_per_question;
        // quizData.difficulty=result.difficulty;
        // quizData.type=result.type;
        //quizData.questions_number=result.questions_number;
      
       

        this.updateQuizData(this.quizData)
 
       }
    });
    }
    clickEditQuiz(quizData:any){
      console.log(quizData)
      
      this._QuizService.onGetQuizById(this.quizId).subscribe({
        next:(res)=>{
          this.quizData=res
          console.log(quizData)
          console.log(res)
        },
        error:(err)=>{
          console.log(err)
        }

      })
    }
    updateQuizData(quizData: any) {
      const allowedFields = ({
        // Define the fields that are allowed to be updated
        title: quizData.title,
        duration:quizData.duration,
        // questions_number:quizData.questions_number,
        //  score_per_question:quizData.score_per_question,
        //  description:quizData.description,
        //  schadule:quizData.schadule,
        //  difficulty:quizData.difficulty,
        //  type:quizData.type,
        //  group:quizData.group
        //Add more fields here as needed
      });
    
      const quizId = quizData._id; 
      this._QuizService.editQuizId(quizId, allowedFields).subscribe({
        next: (res) => {
          console.log(res);
          
          this.quizData = res;
          this._Toastr.success('Quiz', 'Updated successfully');
        },
        error: (err) => {
          console.log(err);
          this._Toastr.error('Quiz', 'Failed to update');
        },
        complete:()=>{
          this.getQuizById()
        }
      });
    }
    // updateQuizData(quizData:any){
    //   const quizId = quizData._id;
    //   this._QuizService.editQuizId(quizId,quizData).subscribe({
    //     next:(res)=>{
    //       this.quizData=res
    //       console.log(this.quizData)
    //     },
    //     error:(err)=>{
    //       console.log(err)
    //       this._Toastr.error('Quiz', ' Added field');
    //     },
    //     complete:()=>{
    //       this._Toastr.success('Quiz', ' Added Success');
    //     }
    //   })
    // }
  }
  
