//Pagina inicial

var botaoComecar =  document.getElementById('comecar');
const body = document.body;

botaoComecar.addEventListener('click', ()=>{
    document.getElementById('pagina-inicial').classList.add('fechado');
    document.getElementById('game').classList.remove('fechado');
    body.style.backgroundImage = "url('img/bg-game.png')"
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
let timer;
let countdown = 30;
let isRunning = false;
var progresso = 0;
var numeroDaQuestao = 0;
const perguntas =[
    {Anunciado: '1/10 - QUANTAS SUBSTITUIÇÕES VOCÊ PODE FAZER DURANTE UMA PARTIDA DO UT?', opcoes: ['A) 1', 'B) 3', 'C) 5', 'D) ILIMITADAS'] , certa: 2},
    {Anunciado: '2/10 - QUANTAS DIFICULDADES EXISTEM NO SQUAD BATTLES??', opcoes: ['A) 5', 'B) 6', 'C) 7', 'D) 8'], certa: 2},
    {Anunciado: '3/10 - QUAL JOGADOR É CONHECIDO POR SER A CAPA DO FIFA 21?', opcoes: ['A)LIONEL MESSI', 'B) CRISTIANO RONALDO', 'C) NEYMAR JR', 'D) KYLIAN MBAPPÉ'] , certa: 3},
    {Anunciado: '4/10 - QUANTOS JOGADORES EXISTEM NO BANCO DE RESERVAS NO FUT?', opcoes: ['A) 5', 'B) 7', 'C) 9', 'D) 11'], certa: 1},
    {Anunciado: '5/10 - QUAL DOS SEGUINTES É UM MODO DE JOGO DISPONIVEL NO FC24?', opcoes: ['A) DRAFT', 'B) MODO AVENTURA', 'C) FIFA ULTIMATE TEAM', 'D) MODO CAMPANHA'], certa: 0},
    {Anunciado: '6/10 - QUAL É O VALOR MÁXIMO DE QUÍMICA QUE UM JOGADOR PODE TER NO UT?', opcoes: ['A) 33', 'B) 2', 'C) 100', 'D) 3'] , certa: 3},
    {Anunciado: '7/10 - EM QUE FIFA O ULTIMATE TEAM FOI LANÇADO OFICIALMENTE?', opcoes: ['A) FIFA 08', 'B) FIFA 09', 'C) FIFA 10', 'D) FIFA 11'] , certa: 1},
    {Anunciado: '8/10 - O MODO UT COMEÇOU COMO UMA DLC PAGA, QUANDO ELE SE TORNOU GRATUITO?', opcoes: ['A) FIFA 09', 'B) FIFA10', 'C) FIFA11', 'D) FIFA12'] , certa: 2},
    {Anunciado: '9/10 - QUAL A CARTA COM MENOR VELOCIDADE DO FIFA23?', opcoes: ['A) RONNY MONTERO', 'B) PETER CLARKE', 'C) DREW MOOR', 'D) PAUL HUNTINGTON'] , certa: 0},
    {Anunciado: '10/10 - QUANTAS CARTAS ESPECIAIS DO CRISTIANO RONALDO TEVE NO FIFA22?', opcoes: ['A) 5', 'B) 8', 'C) 9', 'D) 10'] , certa: 3},
]
var perguntasFaltam = perguntas.length - 1;

//CRONOMETRO
function startTimer() {
    isRunning = true;
    document.getElementById("cronometro").textContent = countdown;
    timer = setInterval(function () {
        if (countdown > 0) {
            countdown--;
            document.getElementById("cronometro").textContent = countdown;
        } else {
            clearInterval(timer);
            isRunning = false;
            document.getElementById("cronometro").textContent = "ACABOU O TEMPO!";
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("cronometro").textContent = "PLAY";
    countdown = 30;
}

function toggleTimer() {
    if (isRunning) {
        resetTimer();
    } else {
        startTimer();
    }
}
//PERGUNTAS

function mostrarPergunta(){
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
    if(numeroDaQuestao === perguntas.length - 1 && alternativaCerta === perguntas[numeroDaQuestao].certa){
        modalPremio.classList.remove('fechado');
        resetTimer()

    }else if(alternativaCerta === perguntas[numeroDaQuestao].certa){
        progresso ++;
        perguntasFaltam--;
        aumentarProgresso();
        modalGanhou.classList.remove('fechado')
        resetTimer()
    }else{
        perdeu.classList.remove('fechado');
        resetTimer()
    }
}

alternativaA.addEventListener('click', ()=> respostaCerta(0));
alternativaB.addEventListener('click', ()=> respostaCerta(1));
alternativaC.addEventListener('click', ()=> respostaCerta(2));
alternativaD.addEventListener('click', ()=> respostaCerta(3));
cronometro.addEventListener('click', ()=>{
    atualizarCronometro()
    var intervalId = setInterval(atualizarCronometro, 1000);
})
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
document.getElementById("cronometro").addEventListener('click', ()=> toggleTimer());
document.getElementById('pular').addEventListener('click', ()=>{
    progresso ++;
    perguntasFaltam--;
    aumentarProgresso();
    modalGanhou.classList.remove('fechado')
    resetTimer()
    document.getElementById('pular').classList.add('ajuda-desativado');
})
document.getElementById("botao-ajuda").addEventListener('click', ()=> {
    resetTimer()
    document.getElementById('botao-ajuda').classList.add('ajuda-desativado')
});
mostrarPergunta();
