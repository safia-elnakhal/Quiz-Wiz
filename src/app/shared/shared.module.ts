import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],


  exports:[
 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    SidebarComponent,
    RouterLinkActive,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  

  ]

})
export class SharedModule { }
