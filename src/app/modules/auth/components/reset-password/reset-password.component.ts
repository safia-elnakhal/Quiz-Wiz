
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { HelperService } from 'src/app/shared/helper/Helper.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  hide:boolean=true;
  hiden:boolean=true;
  constructor(private _AuthService: AuthService,
    private _Router: Router, private _helper: HelperService,
    private _ToastrService: ToastrService) { }
  ngOnInit(): void {
    
  }
resetPasswordForm=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  otp:new FormControl(null,[Validators.required]),
  password:new FormControl(null,[Validators.required, Validators.maxLength(20), Validators.minLength(8)]),

})
onSubmit(data:FormGroup){
  this._AuthService.OnResetPassword(data.value).subscribe({
    next:(res)=>{
      
    },
    error:(err)=>{
      this._ToastrService.error(err.error.message, 'Error')
    },
    complete:()=>{
      this._Router.navigateByUrl('/auth/login')
      this._ToastrService.success('Your Password Changed Successfully','Success')
    }
  })
}

}
