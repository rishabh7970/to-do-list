import {  NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, NgForm } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    HomeComponent,
    BrowserModule,
    FormsModule,
    NgForOf

  ],
  
  providers: [],

 
  
})
export class AppModule { }
