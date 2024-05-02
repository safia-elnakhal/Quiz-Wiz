import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorsComponent } from './components/instructors/instructors.component';
import { GroupListComponent } from './modules/groups/group-list/group-list.component';

const routes: Routes = [

  {path:'', redirectTo:'instructors',pathMatch:'full'},
  {path:'group-list',component:GroupListComponent},
 //{ path: 'instructors', loadChildren: () => import('../instructors/modules/groups.').then(m => m.GroupsModule) },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorsRoutingModule { }
