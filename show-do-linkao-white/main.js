//Pagina inicial

var botaoComecar =  document.getElementById('comecar');
const body = document.body;

botaoComecar.addEventListener('click', ()=>{
    document.getElementById('pagina-inicial').classList.add('fechado');
    document.getElementById('game').classList.remove('fechado');
    body.style.backgroundImage = "url('img/bg-game.png')"
    tempoRestante = 30;
    atualizarCronometro();
    barraProgresso2.classList.add('fechado');
});

//GAME

var pergunta = document.getElementById('enunciado');
var alternativaA = document.getElementById('alternativaA');
var alternativaB = document.getElementById('alternativaB');
var alternativaC = document.getElementById('alternativaC');
var alternativaD = document.getElementById('alternativaD');
var cronometro = document.getElementById('cronometro');
var modalGanhou = document.getElementById('ganhou');
var modalPremio = document.getElementById('modal-1kk');
var modalPerdeu = document.getElementById('perdeu');
var botaoGanhou = document.getElementById('button-ganhou');
var botaoPerdeu = document.getElementById('button-perdeu');
var botaoPular = document.getElementById('pular');
var barraProgresso1 = document.getElementById('barra-de-progresso1');
var barraProgresso2 = document.getElementById('barra-de-progresso2');
var faltam = document.getElementById('faltam-perguntas');
var numeroTotalPerguntas = document.getElementById('numeroTotalPerguntas');
var progresso = 0;
var numeroDaQuestao = 0;
var tempoRestante = 30;
const perguntas =[
    {Anunciado: '1/10 - QUAL É A RARIDADE MAIS ALTA PARA UM CARTA DE JOGADOR DO UT?', opcoes: ['A) BRONZE', 'B) PRATA', 'C) OURO', 'D) ESPECIAL'] , certa: 3},
    {Anunciado: '2/10 - QUAL DESTES É UM MÉTODO DE ADQUIRIR JOGADORES NO UT?', opcoes: ['A) COMPRA DIRETA', 'B) ADOÇÃO', 'C) EMPRÉSTIMO PERMANENTE', 'D) SORTEIO GRATUITO'] , certa: 0},
    {Anunciado: '3/10 - QUAL JOGADOR É CONHECIDO POR SER A CAPA DO FIFA 20?', opcoes: ['A) LIONEL MESSI', 'B) CRISTIANO RONALDO', 'C) NEYMAR JR.', 'D) EDEN HAZARD'] , certa: 3},
    {Anunciado: '4/10 - QUANTOS JOGADORES EXISTEM NO BANCO DE RESERVAS DO UT?', opcoes: ['A) 5', 'B) 7', 'C) 9', 'D) 11'] , certa: 1},
    {Anunciado: '5/10 - QUAL DESSAS É UMA POSIÇÃO DE JOGADOR VÁLIDA NO FUT?', opcoes: ['A) GOLEIRO', 'B) ATACANTE ALADO', 'C) CENTROAVANTE DEFENSIVO', 'D) MEIO-CAMPO OFENSIVO'] , certa: 0},
    {Anunciado: '6/10 - QUE JOGADOR FOI A PRINCIPAL ESTRELA DA CAPA DO FIFA19?', opcoes: ['A) CRISTIANO RONALDO', 'B) NEYMAR', 'C) MESSI', 'D) REUS'] , certa: 0},
    {Anunciado: '7/10 - O UT COMEÇOU COMO UMA "DLC PAGA" DENTRO DO FIFA, QUANDO ELE SE TORNOU GRATUITO?', opcoes: ['A) FIFA09', 'B) FIFA10', 'C) FIFA 11', 'D) FIFA 12'] , certa: 2},
    {Anunciado: '8/10 - QUANDO FOI LANÇADO O PRIMEIRO JOGO DA SAGA FIFA??', opcoes: ['A) 1993', 'B) 1994', 'C) 1995', 'D) 1996'] , certa: 0},
    {Anunciado: '9/10 - QUAIS DESSAS CURIOSIDADES NÃO EXISTIRAM NA HISTÓRIA DO UT?', opcoes: ['A) TÉCNICOS COM OVERALL', 'B) ÁLBUM DE FIGURINHAS', 'C)TROCAR CARTAS COM AMIGOS', 'D) MUDAR OS CABELOS DOS JOGADORES'] , certa: 3},
    {Anunciado: '10/10 - QUAL O JOGADOR COM MAIOR TOTAL STATS IN GAME DO FIFA23?', opcoes: ['A) CRISTIANO RONALDO FUTTIES 2853', 'B) KEVIN DE BRUYNE 2863', 'C) MATTHAUS ESTRELA DA CAPA 2812', 'D)  BELLIGHAM FLASHBACK 2738'] , certa: 2},
]
var perguntasFaltam = perguntas.length - 1;

function atualizarCronometro() {
    cronometro.textContent = `${tempoRestante}`;

    if (tempoRestante <= 0) {
        cronometro.textContent = "Acabou o tempo!!";
    } else {
        tempoRestante--;
    }
}

function mostrarPergunta(){
    tempoRestante = 30;
    atualizarCronometro();
    faltam.textContent = `${perguntasFaltam}`;
    perguntaAtual = perguntas[numeroDaQuestao];
    pergunta.textContent = perguntaAtual.Anunciado;
    alternativaA.textContent = perguntaAtual.opcoes[0];
    alternativaB.textContent = perguntaAtual.opcoes[1];
    alternativaC.textContent = perguntaAtual.opcoes[2];
    alternativaD.textContent = perguntaAtual.opcoes[3];
    numeroTotalPerguntas.textContent = perguntas.length;
}

function aumentarProgresso(){
    const percent = (progresso / perguntas.length) * 100;
    barraProgresso1.style.width = percent + "%";
    barraProgresso2.style.width = percent + "%";
}

function respostaCerta(alternativaCerta){
    if(numeroDaQuestao === perguntas.length - 1){
        modalPremio.classList.remove('fechado');

    }else if(alternativaCerta === perguntas[numeroDaQuestao].certa){
        progresso ++;
        perguntasFaltam--;
        aumentarProgresso();
        modalGanhou.classList.remove('fechado')
    }else{
        perdeu.classList.remove('fechado');
    }
}

alternativaA.addEventListener('click', ()=> respostaCerta(0));
alternativaB.addEventListener('click', ()=> respostaCerta(1));
alternativaC.addEventListener('click', ()=> respostaCerta(2));
alternativaD.addEventListener('click', ()=> respostaCerta(3));
var intervalId = setInterval(atualizarCronometro, 1000);
botaoGanhou.addEventListener('click', ()=>{
    modalGanhou.classList.add('fechado');
    numeroDaQuestao++
    mostrarPergunta();
    barraProgresso2.classList.remove('fechado');
});
botaoPerdeu.addEventListener('click', ()=>{
    modalPerdeu.classList.add('fechado');
    numeroDaQuestao++
    mostrarPergunta();
});

mostrarPergunta();
