class contaCliente{

	constructor(numeroConta,saldo,debito,credito){
		this.numeroConta = numeroConta;
		this.saldo = saldo;
		this.debito = debito;
		this.credito = credito;
	}

	get calcularSaldoAtual(){
		return this.saldo - this.debito + this.credito
	}

	get verificarSaldo(){
		const saldoAtual = this.calcularSaldoAtual
		if (saldoAtual >= 0){
			console.log("Saldo positido R$" + saldoAtual)	
		}else{
			console.log("Saldo negativo R$" + saldoAtual)
		}
	}
}
const entrada = require('readline-sync');
let numeroConta = entrada.question("Digite o número da conta do contaCliente")
let saldo = parseFloat(entrada.question("Digite o saldo do cliente"))
let debito = parseFloat(entrada.question("Digite o debito do cliente"))
let credito = parseFloat(entrada.question("Digite o credito do cliente"))

let conta = new contaCliente(numeroConta,saldo,debito,credito);
conta.verificarSaldo;