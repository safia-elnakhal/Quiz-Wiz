import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupListComponent } from './group-list/group-list.component';
import { DeleteGroupComponent } from './delete-group/delete-group.component';

const routes: Routes = [
{path:'group-list',component:GroupListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupsRoutingModule { }
