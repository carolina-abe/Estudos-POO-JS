import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Conta } from "./Conta/Conta.js";

const diretor = new Diretor("Maria", 10000, 12345678900);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Paulo", 5000, 98745632100);
gerente.cadastrarSenha("1234")
const cliente = new Cliente("Lais", 78945210365, "4789");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "4789");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "12346");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "1234");

const conta = new Conta("1001")
console.log(conta)
// console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);