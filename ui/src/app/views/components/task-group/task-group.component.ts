import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/core/models/Todo';

@Component({
  selector: 'task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.scss']
})
export class TaskGroupComponent implements OnInit {

  @Input() header: string;
  @Input() items: Todo[];
  @Output() deleteEmitter = new EventEmitter();
  @Output() updateEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    console.log(`items: ${this.items}`)
  }

  deleteEmit(todoId){
    this.deleteEmitter.emit(todoId);
  }

  updateEmit(todo: Todo){
    this.updateEmitter.emit(todo);
  }
}
