import { Component, OnInit } from '@angular/core';
import { Ihome } from 'src/app/modules/auth/interfaces/ihome';
import { HomeService } from 'src/app/modules/auth/services/home.service';
import { UserQuizService } from 'src/app/modules/students/services/user-quiz.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  userRole = localStorage.getItem('userRole')
  //tableOfStudent:Ihome | any;
  tableOfStudent:Ihome[]=[];
  tableOfQuiz:any;
  constructor(private _HomeService:HomeService, private _UserQuizService:UserQuizService){}
  ngOnInit(): void {
    this.getTopStudent()
    this.getTopQuizes()
    this.getIncommingQuizzes()
  }

getTopStudent(){
  this._HomeService.onGetTopStudent().subscribe({
    next:(res)=>{
      //console.log(res)
      this.tableOfStudent=res;
      console.log(this.tableOfStudent)
    },
    error:(err)=>{
      console.log(err)
    }
  })

}
getTopQuizes(){
  this._HomeService.onGetTopQuestions().subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}

getIncommingQuizzes(){
  this._UserQuizService.getIncommingQuizzes().subscribe({
    next:(res)=>{
    
      this.tableOfQuiz=res;
      console.log(this.tableOfQuiz)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
