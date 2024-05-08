import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizListComponent } from './quiz-list/quiz-list.component';


@NgModule({
  declarations: [
    QuizListComponent
  ],
  imports: [
    CommonModule,
    QuizesRoutingModule
  ]
})
export class QuizesModule { }
