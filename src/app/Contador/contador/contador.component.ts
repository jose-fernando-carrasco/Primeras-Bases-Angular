import { Component }  from '@angular/core';

@Component({
    selector: 'app-contador',
    template: ` <!-- este template es para no crear un doc html como el app.component.html -->
        <h1>Soy un {{titulo}}</h1>
        <h1>La base es: <strong>{{base}}</strong></h1>
        
        <button (click)="acumular(base)">+ {{base}}</button>
        <span>  {{numero}}  </span>
        <button (click)="acumular(-base)">- {{base}}</button>
    `
})

export class ContadorComponent{
  titulo = 'App Contador';
  numero: number = 0;
  base: number = 5;

  acumular(valor: number){
    this.numero += valor;
  }
}