import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/core/services/todo.service';
import { Todo } from 'src/app/core/models/Todo';
import { ValuesService } from 'src/app/core/services/values.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    TodoService,
    ValuesService
  ]
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  analysisTodos: Todo[];
  devTodos: Todo[];
  testTodos: Todo[];
  doneTodos: Todo[];

  allStatusses: any = [];
  allPriorities: any = [];
  todoModel: Todo = new Todo();

  showModal: boolean = false;
  constructor(private todoService: TodoService,
              private valuesService: ValuesService) { }

  ngOnInit() {
    this.getAllTodos();
    this.getStatusses();
    this.getPriorities();
  }

  async getAllTodos(){
    this.loading = true;
    
    this.todoService.getTodos().then(async (todos) => {
     
      await todos.data.forEach(todoGroup => {
        switch (todoGroup._id) {
          case 'ANALYSIS':
            this.analysisTodos = todoGroup.todos;
            break;
          case 'DEV':
            this.devTodos = todoGroup.todos;
            break;
          case 'TEST':
            this.testTodos = todoGroup.todos;
            break;
          case 'DONE':
            this.doneTodos = todoGroup.todos;
            break;
          default:
            console.log('Error in todos grouping');
            break;
        }
      });
    }).catch((err) =>{
      console.log(`Error : ${JSON.stringify(err)}`);
    }).finally(() => {
      this.loading = false;
    });
  }

  async getPriorities() {
    this.loading = true;
    this.valuesService.getPriorities().then( async (priorities) => {
      this.allPriorities = priorities.data;
    }).catch((err) => {
      console.log(`Error : ${JSON.stringify(err)}`);
    }).finally(() => {
      this.loading = false;
    });
  }

  async getStatusses() {
    this.loading = true;
    this.valuesService.getStatuses().then( async (statuesses) => {
      this.allStatusses = statuesses.data;
    }).catch((err) => {
      console.log(`Error : ${JSON.stringify(err)}`);
    }).finally(() => {
      this.loading = false;
    });
  }

  saveChanges() {
    this.loading = true;
    this.showModal = false;
    if(this.todoModel._id != null){
      this.todoService.updateTodo(this.todoModel._id,this.todoModel).then((result) => {
        if(result.ok){
          Swal.fire(
            'Good job!',
            'Updated task.',
            'success'
          );
        }else{
          Swal.fire(
            'Oops..!',
            'Something went wrong!',
            'error'
          );
        }
      }).catch((err) => {
        console.log(`Error : ${JSON.stringify(err)}`);
        Swal.fire(
          'Oops..!',
          'Something went wrong!',
          'error'
        );
      }).finally(() => {
        this.loading = false;
        this.todoModel = new Todo();
        this.getAllTodos();
      });
    }else{
      this.todoService.addTodo(this.todoModel).then((result) => {
        if(result.ok){
          Swal.fire(
            'Good job!',
            'Add a new task.',
            'success'
          );
        }else{
          Swal.fire(
            'Oops..!',
            'Something went wrong!',
            'error'
          );
        }
      }).catch((err) => {
        console.log(`Error : ${JSON.stringify(err)}`);
        Swal.fire(
          'Oops..!',
          'Something went wrong!',
          'error'
        );
      }).finally(() => {
        this.loading = false;
        this.todoModel = new Todo();
        this.getAllTodos();
      });
    }
  }

  updateListener(event) {
    console.log(JSON.stringify(event));
    this.todoModel = event;
    this.showModal = true;
  }

  deleteListener(todoId) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.loading = true;
        this.todoService.deleteTodo(todoId).then(async (res) => {
          console.log(res);
          if(res.ok){
            Swal.fire(
              'Good job!',
              'Task successfully deleted.',
              'success'
            );
          }else{
            Swal.fire(
              'Oops..!',
              'Something went wrong!',
              'error'
            );
          }
        }).catch((err) => {
          console.log(`Error : ${JSON.stringify(err)}`);
          Swal.fire(
            'Oops..!',
            'Something went wrong!',
            'error'
          );
        }).finally(() => {
          this.loading = false;
          this.getAllTodos();
        });
      }
    });  
  }
  
  test() {
    console.log('clicked test function.');
  }

}
