import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
  /*styles:[
      `
      .hightlight{
        background-color: yellow;
        font-weight: bold;
    }
      `

  ]*/
})
export class DataBindingComponent  {

  constructor() { }

  url = 'http://exemplo.com.br';

  falso = false;
  verdadeiro = true;

  valorInput: String =  '';

  valorSalvo: String = '';

  isMouseOver: boolean = false;

  nome: String = 'abc';

  nomeDoCurso: String = 'Angular';

  nomeDoCursoExemplo1: String = 'Angular1';

  valorInicial: Number = 15;
  pessoa: any = {
    nome: 'def',
    idade: 10,
    sexo: 'M'
  }

  getSexoPessoa(){
    if(this.pessoa.sexo == 'M')
      return 'Masculino'
    else
      return 'Feminino'
  }

  getValor(){
     return '1';
  }

  imgUrl = 'http://lorempixel.com/400/200/nature/'


  botaoClicado(){
    alert("Clicou o botao")

  }

  onKeyUp(event: KeyboardEvent){
    this.valorInput = (<HTMLInputElement>event.target).value;
    

  }

  salvaValor(valor:String){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

  onMudouValor(evento){
    console.log(evento);
  }
}
