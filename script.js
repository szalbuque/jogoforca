/* pegar a área de erros na página */
const areaErros = document.querySelector(".tela-erros");

function desenharGrade(){
	/* Desenha uma grade no canvas 
	pincel.beginPath();
    	pincel.rect(x, y, base, altura);
    	pincel.stroke();
    pincel.closePath();
    for (i = 0; i < 100; i++) {
    	pincel.beginPath();
    		y = y + 10;
    		pincel.moveTo(x,y);
    		pincel.lineTo(x+1200,y);
    		pincel.stroke();
    	pincel.closePath();
	}
	y = 0;
	for (i = 0; i < 120; i++) {
		pincel.beginPath();
			x = x + 10;
			pincel.moveTo(x,y);
			pincel.lineTo(x,y+800);
			pincel.stroke();
		pincel.closePath();
	} */
}

function desenharTabuleiro(palavra) {
	/*desenha uma linha para cada letra da palavra*/
					/* coluna onde se iniciam os traços */
	x = colIni;
	y = linIni;
	for (i=1;i<=numLetras;i++) {
		pincel.beginPath();
			pincel.moveTo(x,y);
			pincel.lineTo(x+tamLinha,y);
			pincel.stroke();
		pincel.closePath();
		x = x + tamLinha + espaco;
	}	
}

function mostrarLetraCerta(letra,pos) {
	var imagem = new Image();
	var caminho = "images/"+letra+".jpg";
	imagem.src = caminho;
	imagem.onload = function() {
    	pincel.drawImage(imagem, colIni+(pos*(tamLinha+espaco)), 10);
	}
}

function btnJogar() {
	alert("jogar");
	/* limpar todas as variáveis */
		numErros = 0;
		listaErros = '';
		letraJogada = "";
		numAcertos = 0;
	/* sortear a palavra */
	/* desenhar o tabuleiro */
	desenharTabuleiro(palavraSorteada);
}

function btnAdicionar() {
	alert("adicionar");
}

function btnDesistir() {
	alert("Desistiu!");
}

function adicionarLetraErrada(letra){
		console.log(areaErros.textContent);
		areaErros.textContent = areaErros.textContent + letra;
}

function btnJogaLetra(letra) {
	letraJogada = letra;
	/*se a letra existe na palavra sorteada, mostra a letra, acrescenta na string palavra jogada */
	/*se a palavra jogada for igual à palavra sorteada, venceu*/
	if (!letrasClicadas.includes(letraJogada)) { /* se a letra já foi clicada, não faz nada */
		letrasClicadas = letrasClicadas + letra;
		if (palavraSorteada.includes(letraJogada)) {
			alert('existe');
			for (i=0;i<=numLetras;i++) {
				if (arrayLetras[i] == letra) {
					mostrarLetraCerta (letra,i);
					numAcertos += 1;
				}
			}
			if (numAcertos == numLetras) {
				alert ("venceu!");
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
}

/* definir número máximo de erros */
let maxErros = 5;

/* sortear a palavra */
let palavraSorteada = "chuchu";
let arrayLetras = palavraSorteada.split('');
let numLetras = palavraSorteada.length;
console.log(arrayLetras,numLetras);


/* criar as variáveis*/
let numErros = 0;
let listaErros = '';
let letraJogada = "";
let numAcertos = 0;
areaErros.textContent = '';
let canvas = document.getElementById('meuCanvas');
let pincel = canvas.getContext('2d');
let base = 1200;
let altura = 800;
let linIni = 60; 								/* linha onde se inicial os traços */
let numLinhas = palavraSorteada.length;			/* número de traços a desenhar */
let tamLinha = 50; 								/* tamanho de cada traço em pixels */
let espaco = 10; 								/* tamanho do espaço entre cada linha */
let tamPalavra = (tamLinha+espaco)*numLinhas; 	/* tamanho ocupado pelos traços */
let colIni = (base-tamPalavra)/2; 
let letrasClicadas = "";
