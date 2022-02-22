import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
    
  Heroes: string[] = ['IronMan','Hulk','SpiderMan','Thor'];
  HeroeBorrado: string = '';

  borrarHeroe(){
    this.HeroeBorrado = this.Heroes.shift() || '';// el shift elimina y devuelve el
    // primer elemento del array, pero cuando el array este vacio va a dar problemas
    // por eso ponemos un || para que me retorne un vacio en lugar de error.                                               
  }

}
