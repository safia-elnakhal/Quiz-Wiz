import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/modules/auth/service/Auth.service';
interface Menu{
  text:string;
  link:string;
  icon:string;
  isActive:boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private _AuthService:AuthService,private _ToastrService: ToastrService,private _Router:Router){}
  userRole = localStorage.getItem('userRole')
  userName = localStorage.getItem('userName')

  logOut(){
    this._AuthService.onLogout().subscribe({
      next: (res) => {
        localStorage.clear();
      },
      error:(err) =>{
        this._ToastrService.error('Logout Failed','Failed')
      },
      complete:()=>{
        this._ToastrService.success('Logout Successfully', 'Success')
        this._Router.navigateByUrl("/auth/login")
        

      }
    })
  }


}
