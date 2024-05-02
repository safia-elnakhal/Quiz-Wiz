import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsRoutingModule } from './groups-routing.module';
import { DeleteGroupComponent } from './delete-group/delete-group.component';
import { GroupListComponent } from './group-list/group-list.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { GroupUpdateComponent } from './group-update/group-update.component';

@NgModule({
  declarations: [
    DeleteGroupComponent,
    GroupListComponent,
    GroupUpdateComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule
  ]
})
export class GroupsModule { }
