import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit{
  taskArray = [{taskName: 'Brush teeth', isCompleted: false}]
  
  constructor(){ }

  ngOnInit(): void {
    
  }

  OnSubmit(form: NgForm){
    console.log(form);
   
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false,
      
    })

    form.reset();
  }

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1)
  }

  OnCheck(index: number){
    console.log(this.taskArray)

    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
    
  }

  OnE(index: number){
    
    
    const str = prompt("What other task do you have ");
    
    if(str)
    this.taskArray[index].taskName = str;
    
    
  }
}


