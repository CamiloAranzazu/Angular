import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
    mostrar = true;
    frase: any = {
      mensaje: 'Un gran poder requiere una responsabilidad',
      autor: 'Ben Parker'
    };
    tecnologias: string[] = ['Angular', 'Jquery', 'SQlserver', 'Node'];
}
