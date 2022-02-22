import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeModule } from './Heroes/heroes.module';
import { ContadorModule } from './Contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [// aqui se añaden todos los modulos que crees ya que este es el modulo principal
    BrowserModule,
    HeroeModule,
    ContadorModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
