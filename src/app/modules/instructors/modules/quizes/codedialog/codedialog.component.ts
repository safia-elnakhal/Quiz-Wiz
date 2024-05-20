import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-codedialog',
  templateUrl: './codedialog.component.html',
  styleUrls: ['./codedialog.component.scss']
})
export class CodedialogComponent implements OnInit{
 codeOfQuizes:any[]=[]
  constructor(private _QuizService:QuizService,    public _Dialog: MatDialog){}
  ngOnInit(): void {
    this.getCodeQuiz()
  }
  sendCodeDialog(){

    const dialogRef = this._Dialog.open(CodedialogComponent, {
      //data:codeData.code
      //width: '60%',
     // height: 'vh'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     console.log(result)
     if(result){
      this.getCodeQuiz()
     }
  });
  }
getCodeQuiz(){
  this._QuizService.getAllQuizes().subscribe({
    next:(res)=>{
      console.log(res)
      this.codeOfQuizes=res;
      console.log(this.codeOfQuizes)
    },
    error:(err)=>{
      console.log(err)
    },
    complete:()=>{
      //this.sendCodeDialog()
    }
  })
}
}
