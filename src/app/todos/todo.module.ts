import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [
    TodoAddComponent,
    TodoListComponent,
    TodoPageComponent,
    TodoItemComponent,
    TodoFooterComponent,
    FiltroPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent
  ]
})
export class TodoModule { }
