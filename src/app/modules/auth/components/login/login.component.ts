import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  constructor() {
    
  }

  ngOnInit() {
    
  }

  onLogin(loginForm: FormGroup) {
    
    
  }
}
