import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario{
  constructor(nome, slario, cpf){
    super(nome, slario, cpf);
    this._bonificacao = 2; //2x salario dele
  }
}