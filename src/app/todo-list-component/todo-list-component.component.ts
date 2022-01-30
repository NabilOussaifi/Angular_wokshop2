import { Component, OnInit } from '@angular/core';
import { Todo } from '../Model/todo';
import { CalculService } from '../service/calcul.service';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent implements OnInit {
ListTodo: Todo[];
count: number;
  constructor(private serviceCal:CalculService) { }
 
  ngOnInit(): void {
    this.ListTodo=[
{"userid": 1, "id": 1, "title": "title1", completed: false},
{"userid": 2, "id": 2, "title": "title2", completed: false},
{"userid": 3, "id": 3, "title": "title3", completed: true},
{"userid": 4, "id": 4, "title": "title4", completed: true}
]
  }
getCalcul() {
  this.count= this.serviceCal.getNumberOf(this.ListTodo,"completed",true);
}

}
