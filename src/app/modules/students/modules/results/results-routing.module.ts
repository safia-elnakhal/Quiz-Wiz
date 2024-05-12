import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsUserComponent } from './results-user/results-user.component';

const routes: Routes = [
  {path:"results-user",component:ResultsUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
