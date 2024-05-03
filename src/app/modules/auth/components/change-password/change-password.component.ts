import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  hide:boolean=true;
  confirmHide:boolean=true;

  constructor(private _AuthService:AuthService,private _ToastrService: ToastrService,
    private _Router:Router){}
  userpassword = new FormGroup({
    password: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    password_new: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),

  })

  onSubmit(data:FormGroup){

    console.log(data.value);
    this._AuthService.onChangePassword(data.value).subscribe({
      next:(res:any)=>{
        localStorage.setItem('userToken', res.token)
      },
      error:(err:any)=>{
        this._ToastrService.error(err.error.message,'Error')
      },
      complete:()=>{
        this._ToastrService.success('Password Updated successfuly','Success')
        this._AuthService.onLogout();
        localStorage.clear();
        this._Router.navigateByUrl("/auth/login")
        
      }
    })
  }

}
