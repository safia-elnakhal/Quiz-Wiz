import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { AddEditQuizComponent } from './add-edit-quiz/add-edit-quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CodedialogComponent } from './codedialog/codedialog.component';


@NgModule({
  declarations: [
    QuizListComponent,
    AddEditQuizComponent,
    CodedialogComponent
  ],
  imports: [
    CommonModule,
    QuizesRoutingModule,
    SharedModule
  ]
})
export class QuizesModule { }
