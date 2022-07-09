//classe abstrata só funciona para ser herdada
export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    //this.constructor salva quem foi o construtor inicialmente chamado
    if(this.constructor == Conta){
      throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois é abstrata");
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  //método abstrato, não é feito para ser chamado diretamente, mas para ser sobrescrito
  sacar(valor) {
    throw new Error("Método Sacar é abstrato")
  }
  _sacar(valor, taxa){
    const valorSacado = taxa * valor;

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  depositar(valor) {
    this._saldo += valor;
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}