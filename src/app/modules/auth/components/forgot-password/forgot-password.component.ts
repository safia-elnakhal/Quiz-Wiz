
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  constructor(private _AuthService:AuthService, private _Router:Router, private _ToastrService:ToastrService){}

  forgotPasswordForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email])
  })
  onSubmit(data:FormGroup){
    this._AuthService.OnForgotPassword(data.value).subscribe({
      next:(res)=>{
      },
      error:(err)=>{
        this._ToastrService.error(err.error.message, 'Error')
      },
      complete:()=>{
        this._Router.navigateByUrl('/auth/resetpassword')
        this._ToastrService.success('Email Reset Successfully','Success')
      }
    })
  }

}
