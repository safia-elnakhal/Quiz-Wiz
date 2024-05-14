import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UserQuizService } from '../../../services/user-quiz.service';
import { Router } from '@angular/router';
import { JoinedSuccessfullyComponent } from '../joined-successfully/joined-successfully.component';

@Component({
  selector: 'app-join-quiz',
  templateUrl: './join-quiz.component.html',
  styleUrls: ['./join-quiz.component.scss']
})
export class JoinQuizComponent {
  QuizId:any;
  constructor(
    public dialogRef: MatDialogRef<JoinQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _UserQuizService:UserQuizService,
    private _Toastr:ToastrService,
    private _Router:Router,
    private _Dialog: MatDialog,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  quizForm=new FormGroup({
    code: new FormControl('', Validators.required),
  });

  onSubmit(data:FormGroup){
    this._UserQuizService.onJoinQuiz(data.value).subscribe({
      next: (res) => {
        console.log(res.quiz);
        this.QuizId=res;
      },
      error: (err) => {
        console.log(err);
        this._Toastr.error('Field');
      },
      complete: () => {
        this.JoinedSuccessfully();
        this._Router.navigate(["dashboard/student/question-quiz"],{queryParams:{quiz:this.QuizId.quiz}});
        
      },
    });

    


  }
  JoinedSuccessfully():void{
    const dialogRef = this._Dialog.open(JoinedSuccessfullyComponent, {
      width: '38%',
      height: "30vh",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      
      if (result) {
        
      }
    }
  );

  }
  
}
