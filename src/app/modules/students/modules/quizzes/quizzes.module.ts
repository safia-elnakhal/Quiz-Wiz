import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { UserQuizzesComponent } from './user-quizzes/user-quizzes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JoinQuizComponent } from './join-quiz/join-quiz.component';
import { QuestionsComponent } from './questions/questions.component';
import { JoinedSuccessfullyComponent } from './joined-successfully/joined-successfully.component';
import { DoneComponent } from './done/done.component';

@NgModule({
  declarations: [
    UserQuizzesComponent,
    JoinQuizComponent,
    QuestionsComponent,
    JoinedSuccessfullyComponent,
    DoneComponent
  ],
  imports: [

  CommonModule,
    QuizzesRoutingModule,
    SharedModule
  ]
})
export class QuizzesModule { }
