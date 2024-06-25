import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todoList : string []=[] ;
inputvalue : string ="";
addtodo(){
  this.todoList.push(this.inputvalue);
  this.inputvalue = ""
  
}

removetodo (name:string){
  this.todoList=this.todoList.filter(value => value !== name);
}
 
constructor(){ }

ngOnInit(): void {
  this.todoList =["Task 1","Task 2"];
}

}
