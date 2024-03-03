class dispositivoEletronico{
	constructor(nome){
		this.nome = nome;
		this.ligado = false;
	}

	ligar(){
		if(this.ligado){
			console.log("Está ligado");
			return;
		}
		this.ligado = true;
	}

	desligar(){
		if(!this.ligado){
			console.log("Já está desligado");
			return;
		}
		this.ligado = false
	}
}

class smartPhone extends dispositivoEletronico{
	constructor(nome,cor,modelo){
		super(nome);// é o atributo que vem do pai, usado com herança
		this.cor = cor;
		this.modelo = modelo;
	}
}

