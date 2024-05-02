import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
interface Menu{
  text:string;
  link:string;
  icon:string;
  isActive:boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output()isOpenedSidebar=new EventEmitter<boolean>();
  isOpened:boolean=true;
  toggleSidebar(){
    this.isOpened=!this.isOpened;
    this.isOpenedSidebar.emit(this.isOpened)
  }
  constructor(private _AuthService: AuthService, private _Router:Router) {}
  isManager(): boolean {
    console.log(this._AuthService.role);
    return this._AuthService.role == 'Manager'? true : false;
  
  }

  isEmployee(): boolean {
    console.log(this._AuthService.role);
    return this._AuthService.role == 'Employee'? true : false
    
  }

  Menu: Menu[] = [
    {
      text: 'Dashboard',
      link: '/dashboard/manager/home',
      icon: 'fa-solid fa-house',
      isActive: this.isManager()
    },
    {
      text: 'Groups',
      link: '/dashboard/employee/home',
      icon: 'fa-solid fa-house',
      isActive:this.isEmployee()
    },

    {
      text: 'Quizzes',
      link: '/dashboard/manager/users',
      icon: 'fa-solid fa-users',
      isActive: this.isManager()
    },
    {
      text: 'Results',
      link: '/dashboard/manager/projects',
      icon: 'fa-solid fa-bars-progress',
      isActive:this.isManager()
    },
    {
      text: 'Tasks',
      link: '/dashboard/manager/tasks',
      icon: 'fa-solid fa-list-check',
      isActive: this.isManager()
    },
    {
      text: 'Projects',
      link: '/dashboard/employee/projects',
      icon: 'fa-solid fa-bars-progress',
      isActive: this.isEmployee()
    },
    {
      text: 'Tasks',
      link: '/dashboard/employee/tasks',
      icon: 'fa-solid fa-list-check',
      isActive: this.isEmployee()
    },
  ]
}
