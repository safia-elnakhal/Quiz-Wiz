import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeleteStudentComponent } from '../../students/delete-student/delete-student.component';
import { QuizService } from '../../../services/quiz.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-quiz',
  templateUrl: './add-edit-quiz.component.html',
  styleUrls: ['./add-edit-quiz.component.scss']
})
export class AddEditQuizComponent {
  constructor(
    public dialogRef: MatDialogRef<AddEditQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _QuizService:QuizService,
    private _Toastr:ToastrService
  ) {}
  
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
