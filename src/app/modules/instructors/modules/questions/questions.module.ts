import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionListComponent } from './question-list/question-list.component';


@NgModule({
  declarations: [
    QuestionListComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
