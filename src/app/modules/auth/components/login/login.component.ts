import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required,
      Validators.email]),
    password:new FormControl(null,[Validators.required])
  
  })

  constructor(private _AuthService: AuthService,
    private _ToastrService: ToastrService,
     private _Router:Router) {
    
  }

  ngOnInit() {
    
  }

  onLogin(loginForm: FormGroup) {
    console.log(loginForm.value);
    this._AuthService.onLogin(loginForm.value).subscribe({
      next: (res) => {
        console.log(res.data);
        
      }, error: (err) => {
        this._ToastrService.error('Login Failed','Failed')
      }, complete: () => {
        this._Router.navigateByUrl('/')
        this._ToastrService.success('Login Successfully', 'Success')
        
      }
    })
    
  }
}
