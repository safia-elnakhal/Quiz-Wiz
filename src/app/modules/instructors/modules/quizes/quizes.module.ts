import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { AddEditQuizComponent } from './add-edit-quiz/add-edit-quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewQuizComponent } from './view-quiz/view-quiz.component';


@NgModule({
  declarations: [
    QuizListComponent,
    AddEditQuizComponent,
    ViewQuizComponent
  ],
  imports: [
    CommonModule,
    QuizesRoutingModule,
    SharedModule
  ]
})
export class QuizesModule { }
