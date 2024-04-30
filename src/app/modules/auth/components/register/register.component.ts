import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../service/Auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  hide:boolean=true;
constructor(private _Router:Router,private _AuthService:AuthService,private _Toastr:ToastrService){}

ngOnInit(): void {
  
}
registerForm = new FormGroup({
  first_name: new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
  last_name:new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(3)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
  role:new FormControl(null,[Validators.required])
})
registerUser(data:FormGroup){
  this._AuthService.onSignUp(data.value).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
      this._Toastr.error('Please try Again','Error')
    },
    complete:()=>{
     this._Toastr.success('created account suucessfully','Success')
    }
  })
}
}
