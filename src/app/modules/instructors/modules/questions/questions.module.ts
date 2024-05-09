import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionListComponent } from './question-list/question-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { AddUpdateQuestionsComponent } from './add-update-questions/add-update-questions.component';


@NgModule({
  declarations: [
    QuestionListComponent,
    DeleteQuestionComponent,
    AddUpdateQuestionsComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    SharedModule
  ]
})
export class QuestionsModule { }
