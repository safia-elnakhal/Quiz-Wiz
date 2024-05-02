import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorsComponent } from './instructors.component';
import { GroupListComponent } from './groups/group-list/group-list.component';

const routes: Routes = [

  {path:'', redirectTo:'instructors',pathMatch:'full'},
  {path:'group-list',component:GroupListComponent},
  { path: 'instructors', loadChildren: () => import('../instructors/groups/groups.module').then(m => m.GroupsModule) },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorsRoutingModule { }
