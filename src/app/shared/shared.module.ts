import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';


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
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    MatSelectModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule
  ],


  exports:[
 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    SidebarComponent,
    RouterLinkActive,
    MatSelectModule,
    MatTreeModule,
    MatButtonModule,
    MatIconModule,
  

  ]

})
export class SharedModule {
//utils==>search


 }
