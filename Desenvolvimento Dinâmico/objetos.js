//formas de criar objeto
const pessoa = {
	nome: "Marcos Davi",
	sobrenome: " de Souza",
	idade: 29,
	nascimento: '13/10/1994'
}


console.log(pessoa['nome'] + pessoa['sobrenome']);
console.log(pessoa['nascimento']);
console.log(pessoa.nascimento);

const funcionario = new Object ();
funcionario.nome = "camilla"
funcionario.sobrenome = "Moreira"

console.log(funcionario.nome)


//criar uam função que cria um objeto
function novoFuncionario(nome,sobrenome,idade) {
	return {nome,sobrenome,idade}
}

const pessoa1 = novoFuncionario("marcos","Davi",2)
console.log(pessoa1.nome)

//posso colocar uma função dentro de um objeto e chamar essa função como um propriedade do objeto
function novoFuncionario2(nome,sobrenome,idade) {
	return {nome,
		sobrenome,
		idade,
		get nomeCompleto(){ //posso usar sem o get
			return `${this.nome} ${this.sobrenome}`
		}
	}
}

const pessoa2 = novoFuncionario2("marcos","Davi",2)

console.log(pessoa2.nomeCompleto);// para usar sem o get temos que chamar como function (pessoa2.nomeCompleto()).

