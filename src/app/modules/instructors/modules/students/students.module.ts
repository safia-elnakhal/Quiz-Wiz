import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule
  ]
})
export class StudentsModule { }
