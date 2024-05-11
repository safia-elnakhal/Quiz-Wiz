import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { GroupListComponent } from './modules/groups/group-list/group-list.component';
import { StudentListComponent } from './modules/students/student-list/student-list.component';
import { QuizListComponent } from './modules/quizes/quiz-list/quiz-list.component';
import { QuestionListComponent } from './modules/questions/question-list/question-list.component';
import { ResultsListComponent } from './modules/results/results-list/results-list.component';

const routes: Routes = [

   {path:'', redirectTo:'instructors',pathMatch:'full'},
   {path:'group-list',component:GroupListComponent},
   {path:"student-list",component:StudentListComponent},
   {path:'quiz-list',component:QuizListComponent},
   {path:'question-list',component:QuestionListComponent},
   {path:"results-list",component:ResultsListComponent},
   { path: 'instructors', loadChildren: () => import('../instructors/modules/groups/groups.module').then(m => m.GroupsModule) },
   { path: 'instructors', loadChildren: () => import('../instructors/modules/students/students.module').then(m => m.StudentsModule) },
   { path: 'instructors', loadChildren: () => import('../instructors/modules/questions/questions.module').then(m => m.QuestionsModule) },
   { path: 'instructors', loadChildren: () => import('../instructors/modules/quizes/quizes.module').then(m => m.QuizesModule) },
   { path: 'instructors', loadChildren: () => import('../instructors/modules/results/results.module').then(m => m.ResultsModule) },
   
   

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorsRoutingModule { }
