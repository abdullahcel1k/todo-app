import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { TaskGroupComponent } from './task-group/task-group.component';



@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    TaskGroupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent,
    TaskGroupComponent
  ]
})
export class ComponentsModule { }
