import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionService } from '../../../services/question.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-update-questions',
  templateUrl: './add-update-questions.component.html',
  styleUrls: ['./add-update-questions.component.scss']
})
export class AddUpdateQuestionsComponent {
  userName = localStorage.getItem('userName');
  name: string = '';
  constructor(
    private _QuestionService:QuestionService,
    private _Toastr:ToastrService
    ,public dialogRef: MatDialogRef<AddUpdateQuestionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  
  onNoClick(): void {
    this.dialogRef.close();
  }

  questionForm=new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      options: new FormGroup({
        A: new FormControl('', Validators.required),
        B: new FormControl('', Validators.required),
        C: new FormControl('', Validators.required),
        D: new FormControl('', Validators.required)
      }),
      answer: new FormControl('', Validators.required),
      difficulty: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    });

  onSubmit(data:FormGroup){
    this._QuestionService.onAddQuestion(data).subscribe({
      next: (res) => {
        console.log(res);
        
      },
      error: (err) => {
        console.log(err);
        this._Toastr.error('Question', ' Added field');
      },
      complete: () => {
        this._Toastr.success('Question', ' Added Success');
        
      },
    });
  }

}
