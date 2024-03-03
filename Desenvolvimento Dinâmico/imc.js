console.log("falta resolver o problema do imc que naõ está estrando nos outros valores");

function dadosPessoais (nome,sobrenome,altura,peso){
	return {
		nome,
		sobrenome,
		altura,
		peso,
		calculoImc (){
		var valor = this.peso/(this.altura**2);

			if (valor < 18.5){
				console.log("Abaixo do Peso")

			}else if (valor < 25.9){
				console.log("Peso Normal")

			}else if (valor < 29.9){
				console.log("Acima do Peso (sobrepeso)")
				
			}else if (valor < 34.9){
				console.log("Obesidade grau I")
				
			}else if (valor < 39.9){
				console.log("Obesidade grau II")
				
			}else if (valor >= 40.0){
				console.log("Obesidade grau III")

			}else{
				console.log("Valor incorreto de peso ou altura")
			}		
		}
	};
}

function colherDados () {
	var entradaDados = require('readline-sync')
	
	var nome = entradaDados.question("Qual seu nome: ");
	var sobrenome = entradaDados.question("Qual seu sobrenome: ");
	var peso = entradaDados.question("Qual seu peso: ");
	var altura = entradaDados.question("Sua altura: ");

	return dadosPessoais(nome,sobrenome,peso,altura);
}

const pessoa1 = colherDados();
pessoa1.calculoImc();
