import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionService } from '../../../services/question.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-update-questions',
  templateUrl: './add-update-questions.component.html',
  styleUrls: ['./add-update-questions.component.scss']
})
export class AddUpdateQuestionsComponent implements OnInit {
  userName = localStorage.getItem('userName');
  name: string = '';
  QuestionId:number=0;
  QuestionData:any[]=[];

  constructor(
    private _QuestionService:QuestionService,
    private _Toastr:ToastrService,
    private _ActivatedRoute:ActivatedRoute
    ,public dialogRef: MatDialogRef<AddUpdateQuestionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
   
    console.log(_ActivatedRoute.snapshot.params['id']);
    this.QuestionId = _ActivatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    if (this.QuestionId > 0) {
      this.getQuestionById(this.QuestionId);
    }
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
      type: new FormControl('', Validators.required),
    
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
  AddQuestion(data:FormGroup){
    
  }
  
  getQuestionById(id: number) {
    this._QuestionService.onGetQuestionById(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.QuestionData = res;
      },
      error: () => {},
      complete: () => {
  }
})

}
}