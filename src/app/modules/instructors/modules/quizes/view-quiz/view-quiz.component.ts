
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.scss']
})
export class ViewQuizComponent implements OnInit {
   
  quizId:any;
  quizData:any;
  constructor(private _QuizService:QuizService ,private _ActivatedRoute:ActivatedRoute){
    this.quizId = _ActivatedRoute.snapshot.params['_id'];
    console.log(this.quizId);
    
    }
ngOnInit():void{
  this.getQuizById();
 
}
  getQuizById(){
    this._QuizService.onGetQuizById(this.quizId).subscribe({
      next:(res)=>{
        this.quizData=res;
        console.log(res);
        
      }
    })

  }
}
