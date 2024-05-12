import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserQuizzesComponent } from './user-quizzes/user-quizzes.component';

const routes: Routes = [{path:"quizzes-user",component:UserQuizzesComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
