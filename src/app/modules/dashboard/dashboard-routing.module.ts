import { studentGuard } from './../../core/Guards/Student-guard/student.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { instructorGuard } from 'src/app/core/Guards/Instructor-guard/instructor.guard';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

const routes: Routes = [

   {path: '', component: DashboardComponent, children: [
      {path:'',component:HomeComponent},
      { path: 'home', component: HomeComponent },
      {path:'my-profile',component:MyProfileComponent},
      { path: 'student',canActivate:[studentGuard], loadChildren: () => import('../students/students.module').then(m => m.StudentsModule) },
      { path: 'instructors', loadChildren: () => import('../instructors/instructors.module').then(m => m.InstructorsModule) },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
