import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toogleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {

  completado: boolean = false;

  constructor(private store: Store<AppState>){

  }

  toogleAll(){
    this.completado = !this.completado;
    this.store.dispatch(toogleAll({ completado: this.completado }))
  }
}
