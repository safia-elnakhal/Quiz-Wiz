import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RouterLink, RouterLinkActive } from '@angular/router';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
  ],

  exports:[
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,

  ]

})
export class SharedModule { }
