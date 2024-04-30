import { studentGuard } from './../../core/Guards/Student-guard/student.guard';
import { StudentsModule } from './../students/students.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { instructorGuard } from 'src/app/core/Guards/Instructor-guard/instructor.guard';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path:'',component:HomeComponent},
      { path: 'home', component: HomeComponent},
      { path: 'students',canActivate:[studentGuard], loadChildren: () => import('../students/students.module').then(m => m.StudentsModule) },
      { path: 'instructors',canActivate:[instructorGuard], loadChildren: () => import('../instructors/instructors.module').then(m => m.InstructorsModule) },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
