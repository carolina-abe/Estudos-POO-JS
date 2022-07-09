import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia); //referencia a classe mae, chama o construtor
        ContaCorrente.numeroDeContas += 1;
    }
    teste(){
        super.teste()
        console.log("teste de mesa na classe conta corrente")
    }

    //sobrescrevendo o comportamento de sacar
    sacar(valor){
        let taxa= 1.1;
        return this._sacar(valor, taxa);
    }
}