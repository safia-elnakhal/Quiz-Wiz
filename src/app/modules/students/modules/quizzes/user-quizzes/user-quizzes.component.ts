import { Component, OnInit } from '@angular/core';
import { UserQuizService } from '../../../services/user-quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { JoinQuiz } from '../../../interfaces/joinQuiz';
import { JoinQuizComponent } from '../join-quiz/join-quiz.component';
import { Router } from '@angular/router';
import { JoinedSuccessfullyComponent } from '../joined-successfully/joined-successfully.component';

@Component({
  selector: 'app-user-quizzes',
  templateUrl: './user-quizzes.component.html',
  styleUrls: ['./user-quizzes.component.scss']
})
export class UserQuizzesComponent implements OnInit {
  comletedQuizzes:any[]=[];
  joinQuiz:any
  constructor(private _UserQuizService:UserQuizService,public _Dialog: MatDialog,
    private _Toastr:ToastrService,private _Router:Router){}
  ngOnInit(): void {
    this.getCompletedQuizzesStudent();
  }

  getCompletedQuizzesStudent(){
    this._UserQuizService.onCompletedQuizzesStudent().subscribe({
      next:(res)=>{
        this.comletedQuizzes=res
            console.log(res);
            
      },error:()=>{

      },complete:()=>{

      }
    })
  }
  openAddGroupDialog():void {

    const dialogRef = this._Dialog.open(JoinQuizComponent, {
     
      width: '38%',
      height: "30vh",
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      
      if (result) {
        this.joinAQuiz(result);
      }
    }
  );
  }
 joinAQuiz(data:JoinQuiz) {
    
    this._UserQuizService.onJoinQuiz(data).subscribe({
      next: (res) => {
        console.log(res.data.quiz);
        this.joinQuiz=res.data;
      },
      error: (err) => {
        console.log(err);
        this._Toastr.error('Field');
      },
      complete: () => {
        this.JoinedSuccessfully();
        this._Router.navigate(["/dashboard/student/question-quiz"],{queryParams:{quiz:this.joinQuiz.quiz}});
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
