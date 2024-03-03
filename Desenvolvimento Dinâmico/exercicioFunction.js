function main(){
	const requisicaoNota = require('readline-sync');
	var somaProduto = 0;
	var peso =[2,3,5];
	var somaPesos = peso.reduce((acc, peso)=>acc+peso,0);

	for (i = 0; i < peso.length; i++){
		var nota = parseFloat(requisicaoNota.question(`Qual a ${i+1}º nota:`));
		somaProduto += nota*peso[i]
	}
		
	console.log(`A média Ponderada do Aluno é: ${(somaProduto/somaPesos).toFixed(2)}`);
}

main();
