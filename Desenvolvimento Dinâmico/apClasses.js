class funcionario{

	constructor(nome, idade,cargo){
		this.nome = nome;
		this.idade = idade;
		this.cargo = cargo

	}

	seApresentar(){
		console.log("Olá " + this.nome +" tem " +this.idade + " anos, bem vindo ao trabalho.")
	}

	trabalhar(){
		console.log(this.nome +" pode começar a trabalhar!")
	}
}


class gerente extends funcionario{
	constructor(nome,idade,cargo,departamento){
		super(nome, idade, cargo);
		this.departamento = departamento;
	}

	gerenciar(){
		console.log(this.nome + " Você é gerente da empresa, e tem uma equipe em sua responsabilidade, departamento: " +this.departamento +" boa Sorte!")

	}
}


class desenvolvedor extends funcionario{
	constructor(nome,idade,cargo,linguagem){
		super(nome,idade,cargo);
		this.linguagem = linguagem;
	}

	programar(){
		console.log(this.nome + " você é um programador e tem proeficiencia na linguaguem " + this.linguagem)

	}
}


const gerente01 = new gerente("Johny Boy", 50, "Administrador","Programadores");
console.log(gerente01);
gerente01.seApresentar();
gerente01.trabalhar();
gerente01.gerenciar();

const desenvolvedor01 = new desenvolvedor("Valéria Brinks", 35, "Programador Júnior","Python, Java, JavaScript, C#");
console.log(desenvolvedor01);
desenvolvedor01.seApresentar();
desenvolvedor01.trabalhar();
desenvolvedor01.programar();
