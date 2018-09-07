import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {
mostrar: boolean = true;
frase: any = { 
  mensaje: 'Todo gran poder requiere una gran responsabilidad',
  autor: 'Ben Parker'
}
tecnologias: string[] = ['Javascript', 'Jquery', 'SqlServer', 'C#'] 
}
