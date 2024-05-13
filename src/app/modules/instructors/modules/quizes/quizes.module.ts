import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { AddEditQuizComponent } from './add-edit-quiz/add-edit-quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { ViewQuizComponent } from './view-quiz/view-quiz.component';
import { CodedialogComponent } from './codedialog/codedialog.component';



@NgModule({
  declarations: [
    QuizListComponent,
    AddEditQuizComponent,
<<<<<<< HEAD
    ViewQuizComponent
=======
    CodedialogComponent
>>>>>>> 03a71c39c761d49c8224c6a62cdc6b0b4ade6b2e
  ],
  imports: [
    CommonModule,
    QuizesRoutingModule,
    SharedModule
  ]
})
export class QuizesModule { }
