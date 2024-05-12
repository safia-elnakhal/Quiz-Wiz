import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsRoutingModule } from './questions-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { AddUpdateQuestionsComponent } from './add-update-questions/add-update-questions.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { QuestionListComponent } from './question-list/question-list.component';


@NgModule({
  declarations: [
    QuestionListComponent,
    DeleteQuestionComponent,
    AddUpdateQuestionsComponent,
    QuestionDetailsComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    SharedModule
  ]
})
export class QuestionsModule { }
