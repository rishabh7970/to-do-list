import {  NgModule, isStandalone } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';




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


