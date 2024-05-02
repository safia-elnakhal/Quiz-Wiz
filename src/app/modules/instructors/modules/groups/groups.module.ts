import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from './groups-routing.module';
import { DeleteGroupComponent } from './delete-group/delete-group.component';
import { GroupListComponent } from './group-list/group-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DeleteGroupComponent,
    GroupListComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    SharedModule,

  ]
})
export class GroupsModule { }
