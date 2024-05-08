import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { GroupListComponent } from './modules/groups/group-list/group-list.component';
import { StudentListComponent } from './modules/students/student-list/student-list.component';
import { QuizListComponent } from './modules/quizes/quiz-list/quiz-list.component';
import { QuestionListComponent } from './modules/questions/question-list/question-list.component';

const routes: Routes = [

   {path:'', redirectTo:'instructors',pathMatch:'full'},
   {path:'group-list',component:GroupListComponent},
   {path:"student-list",component:StudentListComponent},
   {path:'quiz-list',component:QuizListComponent},
   {path:'question-list',component:QuestionListComponent},
   { path: 'instructors', loadChildren: () => import('../instructors/modules/groups/groups.module').then(m => m.GroupsModule) },
   { path: 'instructors', loadChildren: () => import('../instructors/modules/students/students.module').then(m => m.StudentsModule) },
   { path: 'instructors', loadChildren: () => import('../instructors/modules/questions/questions.module').then(m => m.QuestionsModule) },
   { path: 'instructors', loadChildren: () => import('../instructors/modules/quizes/quizes.module').then(m => m.QuizesModule) },
   
   

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorsRoutingModule { }
