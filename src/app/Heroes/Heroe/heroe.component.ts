import { Component } from "@angular/core";

@Component({
   selector: 'app-heroe',
   templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
   nombre: string = 'IronMan';
   edad  : number = 22;

   obtenerHeroe(): string{
      return `${this.nombre} - ${this.edad}`;
   }

   get nombreMayuscula(){
       return this.nombre.toUpperCase();
   }

   cambiarHeroe(): void{
       this.nombre = 'Hombre Arania';
   }

   cambiarEdad():void{
       this.edad = 34;
   }
}