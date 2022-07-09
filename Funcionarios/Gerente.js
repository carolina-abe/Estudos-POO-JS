import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
  constructor(nome, slario, cpf){
    super(nome, slario, cpf);
    this._bonificacao = 1.1; //10%
  }
}