import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from './groups-routing.module';
import { DeleteGroupComponent } from './delete-group/delete-group.component';
import { GroupListComponent } from './group-list/group-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { AddEditGroupComponent } from './add-edit-group/add-edit-group.component';

@NgModule({
  declarations: [
    DeleteGroupComponent,
    GroupListComponent,
    AddEditGroupComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class GroupsModule { }
