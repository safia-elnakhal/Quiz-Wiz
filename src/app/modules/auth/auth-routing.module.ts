
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth/auth/auth.component';

import { RegisterComponent } from './components/register/register.component';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [


  { path: '', component: LoginComponent },
      {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path: 'resetpassword', component: ResetPasswordComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
