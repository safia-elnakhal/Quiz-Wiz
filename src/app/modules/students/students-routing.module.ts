import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsUserComponent } from './modules/results/results-user/results-user.component';
import { UserQuizzesComponent } from './modules/quizzes/user-quizzes/user-quizzes.component';


const routes: Routes = [
  {path:'', redirectTo:'student',pathMatch:'full'},
  {path:"results-user",component:ResultsUserComponent},
  {path:"quizzes-user",component:UserQuizzesComponent},
  {path: 'student', loadChildren: () => import('../students/modules/results/results.module').then(m => m.ResultsModule) },
  {path: 'student', loadChildren: () => import('../students/modules/quizzes/quizzes.module').then(m => m.QuizzesModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
