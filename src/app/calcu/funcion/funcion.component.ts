import { Component } from '@angular/core';

@Component({
  selector: 'app-funcion',
  templateUrl: './funcion.component.html',
  styleUrls: ['./funcion.component.css']
})
export class FuncionComponent {
  // Trabajando con ngStyle
  color(){
    return 'red';
  }

  //Atributos para ngSwitch
  num1= 0;
  num2= 0;
  op= "ninguno";
    
}
