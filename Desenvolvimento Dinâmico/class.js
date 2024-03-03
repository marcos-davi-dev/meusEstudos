class pessoa{
	constructor(nome,sobrenome){ //usa o 
		this.nome = nome;
		this.sobrenome = sobrenome;
	}

	falar(){
		console.log(`Olá ${this.nome}`);
	}

	get nomeCompleto(){          //quando usamos o get não é necessário usar o parenteses() qunado fizer a chamada dele.
		console.log(`Olá `)
	}

}

const pessoa1 = new pessoa("Marcos Davi","de Souza");
console.log(pessoa1);
console.log(pessoa1.falar());
console.log(pessoa1.nomeCompleto);