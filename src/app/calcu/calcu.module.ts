import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionComponent } from './funcion/funcion.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FuncionComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FuncionComponent
  ]
})
export class CalcuModule { }
