import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './Heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations:[// los componentes que pertenecen a este modulo
       HeroeComponent,
       ListadoComponent     
    ],

    exports:[//Para que app-heroe y app-listado se puedan usar en app.component.html primcipal
       HeroeComponent,
       ListadoComponent 
    ],

    imports:[// el commonModule es para usar los *ngFor, *ngIf, etc...
        CommonModule
    ]

})

export class HeroeModule{
}
