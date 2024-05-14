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
import { MatTreeModule } from '@angular/material/tree';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

import {MatDatepickerModule} from '@angular/material/datepicker';

import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatStepperModule} from '@angular/material/stepper';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';


import {MatSlideToggleModule} from '@angular/material/slide-toggle';



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
    MatTreeModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,

    MatDatepickerModule,
    MatStepperModule,

    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatNativeDateModule,
    ClipboardModule,
    MatSlideToggleModule,


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
    MatDialogModule,
    MatMenuModule,
    MatTabsModule,

    MatDatepickerModule,

    ClipboardModule,
    MatStepperModule,

    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,

    MatNativeDateModule,

    MatSlideToggleModule


  ],

})
export class SharedModule {
//utils==>search


 }
