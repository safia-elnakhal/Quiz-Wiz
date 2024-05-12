import { Component, OnInit } from '@angular/core';
import { UserQuizService } from '../../../services/user-quiz.service';

@Component({
  selector: 'app-user-quizzes',
  templateUrl: './user-quizzes.component.html',
  styleUrls: ['./user-quizzes.component.scss']
})
export class UserQuizzesComponent implements OnInit {
  comletedQuizzes:any[]=[];
  constructor(private _UserQuizService:UserQuizService){}
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
}
