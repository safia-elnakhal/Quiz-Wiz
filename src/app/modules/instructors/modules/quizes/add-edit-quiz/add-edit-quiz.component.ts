import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DeleteStudentComponent } from '../../students/delete-student/delete-student.component';
import { QuizService } from '../../../services/quiz.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CodedialogComponent } from '../codedialog/codedialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-quiz',
  templateUrl: './add-edit-quiz.component.html',
  styleUrls: ['./add-edit-quiz.component.scss']
})
export class AddEditQuizComponent {
  code:any;
  quizId:any;
  editQuiz:any;
  constructor(
    public dialogRef: MatDialogRef<AddEditQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _QuizService:QuizService,
    private _Toastr:ToastrService,
    public _Dialog: MatDialog,
    private _ActivatedRoute:ActivatedRoute,
  ) {
    this.quizId = this._ActivatedRoute.snapshot.params['_id']
    console.log(this.quizId)
  }

  onNoClick(){
    this.dialogRef.close();
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
  onAddQuiz(data:FormGroup){
    console.log(data.value)
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
        this.sendCodeDialog()
        
      }
    })
    }
    clickEditQuiz(id:any,data:any){
      this._QuizService.editQuizId(id,data).subscribe({
        next:(res)=>{
          console.log(res)
          this.editQuiz=res.title
        },
        error:(err)=>{
          console.log(err)
        }

      })
    }
    // getQuizById(){
    //   this._QuizService.getQuizId(this.quizId).subscribe({
    //     next:(res)=>{
    //       console.log(res)
    //       this.onEditForm(res);
    //     },
    //     error:(err)=>{
    //       console.log(err)
    //     }
    //   })
    // }
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
  
    sendCodeDialog(){

      const dialogRef = this._Dialog.open(CodedialogComponent, {
       // data:codeData.code
        //width: '60%',
       // height: 'vh'
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
       console.log(result)
       if(result){
         this.onAddQuiz(result)
       }
    });
    }
      }