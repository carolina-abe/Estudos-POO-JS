/*
Ser autenticavel significa ter um método autenticar
Duck Type = usada em ling fracamente tipada, se possui métodos iguaisa um pato, significa que é um
*/
export class SistemaAutenticacao{
  static login(autenticavel, senha){
    if(SistemaAutenticacao.isAutenticavel(autenticavel)){
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  /*
    Verifica se dentro do obj -> autenticavel existe uma chave "autenticar"
    Se ele existe, verifica se é do tipo de uma função
    Seria uma instancia de uma função 
    Um método quando está dentro de um obj também é um obj
    Function = construtor de função, uma forma de chamar os métodos
    */
  static isAutenticavel(autenticavel){
    return "autenticar" in autenticavel && 
      autenticavel.autenticar instanceof Function
  }
}