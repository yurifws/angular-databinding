import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']//,
  //inputs['nomeCurso:nome'] input funciona aqui tb
})
export class InputPropertyComponent implements OnInit {


  @Input() nomeCurso1: String = ''; // declarar propriedade com mesmo nome da variável

  @Input('nome') nomeCurso: String ='';// declara propiedade com


  constructor() { }

  ngOnInit() {
  }

}
