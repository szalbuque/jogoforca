/* criar as variáveis*/
let numErros = 0; 		// número de erros cometidos
let listaErros = ""; 	// string contendo as letras erradas digitadas
let letrasClicadas = "";// string contendo todas as letras clicadas
let letraJogada = ""; 	// letra clicada pelo jogador
let numAcertos = 0; 	// número de acertos cometidos
let canvas = document.getElementById('meuCanvas'); 	// pega o elemento canvas do documento HTML
let pincel = canvas.getContext('2d');				// cria o pincel para desenho no canvas
let colIni = 0;			// vai receber a coluna onde deve ser iniciado o tabuleiro
const maxErros = 4; 		// máximo de erros
const base = 1200;		// largura do canvas
const altura = 800;		// altura do canvas
const linIni = 60; 		// linha onde se iniciam os traços
const tamLinha = 50; 		// tamanho de cada traço em pixels
const espaco = 10; 		// tamanho do espaço entre cada linha 
const areaErros = document.querySelector(".tela-erros");
const listaPalavras = ["chuchu","abacaxi","cisne","doutor","orangotango"];	// lista das palavras do jogo

// pegar e limpar a área de erros na página
function iniciaAreaErros() {
	areaErros.textContent = '';
} iniciaAreaErros();

// retorna uma das palavras da lista de palavras do jogo
function sortearPalavra(lista) {
	var max = lista.length;
	var indice = Math.floor(Math.random() * max);
	return lista[indice];
} 

var palavraSorteada = sortearPalavra(listaPalavras);
tamPalavra = (tamLinha+espaco)*palavraSorteada.length;
colIni = (base-tamPalavra)/2; 

// desenha o tabuleiro com as linhas equivalentes ao número de letras da palavra sorteada
function desenharTabuleiro(palavra,col) {
	/*desenha uma linha para cada letra da palavra*/
	// Limpar o canvas
	pincel.clearRect(0, 0, canvas.width, canvas.height);
	/* coluna onde se iniciam os traços */
	var x = col;
	var y = linIni;
	var numLetras = palavra.length;			/* número de traços a desenhar */
	for (i=1;i<=numLetras;i++) {
		pincel.beginPath();
			pincel.moveTo(x,y);
			pincel.lineTo(x+tamLinha,y);
			pincel.stroke();
		pincel.closePath();
		x = x + tamLinha + espaco;
	}	
} desenharTabuleiro(palavraSorteada,colIni);

function desenharForca(numero) {
	/* apresenta a imagem da forca correspondente ao numero passado como parâmetro */
	x = (base - 174)/2; /* a largura da imagem da forca é de 174 pixels */
	var imagem = new Image();
	var caminho = "images/"+`${numero}`+".jpg";
	imagem.src = caminho;
	imagem.onload = function() {
		pincel.drawImage(imagem, x, 80);
	}
} desenharForca(0);

function mostrarLetraCerta(letra,pos) {
	/* apresenta a imagem correspondente a letra, na posição pos */
	var imagem = new Image();
	var caminho = "images/"+letra+".jpg";
	imagem.src = caminho;
	imagem.onload = function() {
    	pincel.drawImage(imagem, colIni+(pos*(tamLinha+espaco)), 10);
	}
}

function adicionarLetraErrada(letra){
		areaErros.textContent = areaErros.textContent + letra + " ";
}

function btnJogaLetra(letra) {
	var letraJogada = letra;
	var numLetras = palavraSorteada.length;
	var arrayLetras = palavraSorteada.split('');
	/*se a letra existe na palavra sorteada, mostra a letra, acrescenta na string palavra jogada */
	/*se a palavra jogada for igual à palavra sorteada, venceu*/
	if (!letrasClicadas.includes(letraJogada)) { /* se a letra já foi clicada, não faz nada */
		letrasClicadas = letrasClicadas + letra;
		if (palavraSorteada.includes(letraJogada)) { // a letra clicada existe na palavra sorteada
			for (i=0;i<=numLetras;i++) {
				if (arrayLetras[i] == letra) {
					mostrarLetraCerta (letra,i);
					numAcertos += 1;
				}
			}
			if (numAcertos == numLetras) {
				alert ("Parabéns! Você venceu!");
			}
		} else {
			adicionarLetraErrada(letraJogada);
			numErros += 1;
			desenharForca(numErros);
			if (numErros == maxErros) {
				alert("Sinto muito! Você perdeu!");
			}
		}
	}	
}

// Limpa a tela e reinicia o jogo, sorteando nova palavra
function btnReiniciar() {
	numErros = 0; 		// número de erros cometidos
	listaErros = ""; 	// string contendo as letras erradas digitadas
	letrasClicadas = "";// string contendo todas as letras clicadas
	letraJogada = ""; 	// letra clicada pelo jogador
	numAcertos = 0; 	// número de acertos cometidos
	iniciaAreaErros()
	palavraSorteada = sortearPalavra(listaPalavras);
	tamPalavra = (tamLinha+espaco)*palavraSorteada.length;
	colIni = (base-tamPalavra)/2; 
	desenharTabuleiro(palavraSorteada,colIni);
	desenharForca(0);
}


