/* pegar a área de erros na página */
const areaErros = document.querySelector(".tela-erros");

function btnJogar() {
	alert("jogar");
}

function btnAdicionar() {
	alert("adicionar");
}

function btnDesistir() {
	alert("Desistiu!");
}

function mostraLetraCerta (letra, indice) {
	alert (letra + "-" + indice);
}

function adicionarLetraErrada(letra){
		console.log(areaErros.textContent);
		areaErros.textContent = areaErros.textContent + letra;
}

function btnJogaLetra(letra) {
	letraJogada = letra;
	/*se a letra existe na palavra sorteada, mostra a letra, acrescenta na string palavra jogada */
	/*se a palavra jogada for igual à palavra sorteada, venceu*/
	if (palavraSorteada.includes(letraJogada)) {
		alert('existe');
		for (i=0;i<=numLetras;i++) {
			if (arrayLetras[i] == letra) {
				mostraLetraCerta (letra,i);
				numAcertos += 1;
			}
		}
		if (numAcertos == numLetras) {
			alert ("venceu!")
		}
	} else {
		alert('não existe');
		adicionarLetraErrada(letraJogada);
		numErros += 1;
		if (numErros == maxErros) {
			alert("perdeu!");
		}
	}

}





/* definir número máximo de erros */
let maxErros = 5;

/* sortear a palavra */
let palavraSorteada = "palavra";
let arrayLetras = palavraSorteada.split('');
let numLetras = palavraSorteada.length;
console.log(arrayLetras,numLetras);


/* montar o tabuleiro*/

/* zerar as variáveis*/
let numErros = 0;
let listaErros = '';
let letraJogada = "";
let palavraJogada = "";
let numAcertos = 0;
areaErros.textContent = '';

