import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserQuizzesComponent } from './user-quizzes/user-quizzes.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path:"quizzes-user",component:UserQuizzesComponent},
  {path:"question-quiz",component:QuestionsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
