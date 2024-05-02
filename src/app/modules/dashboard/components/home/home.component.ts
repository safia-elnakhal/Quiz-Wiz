import { Component, OnInit } from '@angular/core';
import { Ihome } from 'src/app/modules/auth/interfaces/ihome';
import { HomeService } from 'src/app/modules/auth/services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  //tableOfStudent:Ihome | any;
  tableOfStudent:Ihome[]=[];
  //tableOfQuiz:any;
  constructor(private _HomeService:HomeService){}
  ngOnInit(): void {
    this.getTopStudent()
    this.getTopQuizes()
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
}
