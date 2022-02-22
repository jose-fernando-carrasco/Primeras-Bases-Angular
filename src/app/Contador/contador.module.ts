import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
       ContadorComponent
    ],

    exports:[
       ContadorComponent 
    ],

    imports:[
        CommonModule// anque no es necesario por que no estoy ocupando *ngFor, etc...
    ]
})

export class ContadorModule{

} 