import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { UserQuizzesComponent } from './user-quizzes/user-quizzes.component';


@NgModule({
  declarations: [
    UserQuizzesComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule
  ]
})
export class QuizzesModule { }
