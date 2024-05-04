import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { GroupListComponent } from './modules/groups/group-list/group-list.component';
import { StudentListComponent } from './modules/students/student-list/student-list.component';

const routes: Routes = [

  {path:'', redirectTo:'instructors',pathMatch:'full'},
  {path:'group-list',component:GroupListComponent},
  {path:"student-list",component:StudentListComponent},
   { path: 'instructors', loadChildren: () => import('../instructors/modules/groups/groups.module').then(m => m.GroupsModule) },
   //{ path: 'students', loadChildren: () => import('../instructors/modules/students/students.module').then(m => m.StudentsModule) },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorsRoutingModule { }
