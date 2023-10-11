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
    {Anunciado: '1/10 - QUAL É A DESENVOLVEDORA DO JOGO FIFA/EAFC?', opcoes: ['A) ELETRONICS ARTS', 'B) KONAMI', 'C) UBISOFT', 'D) ACTIVISION'] , certa: 0},
    {Anunciado: '2/10 - QUE TIPO DE DESAFIO VOCÊ PODE COMPLETAR PARA GANHAR RECOMPENSAS NO UT?', opcoes: ['A) DESAFIOS DE CONSTRUÇÃO DE ELENCO (DME)', 'B) DESAFIOS DE HABILIDADE (DDH)', 'C) DESAFIOS DE AGILIDADE (DDA)', 'D) DESAFIOS DE RESISTÊNCIA (DDR)'], certa: 0},
    {Anunciado: '3/10 - QUAL JOGADOR É CONHECIDO POR SER A CAPA DO FIFA 21?', opcoes: ['A) LIONEL MESSI', 'B) CRISTIANO RONALDO', 'C) NEYMAR JR.', 'D) KYLIAN MBAPPÉ'] , certa: 3},
    {Anunciado: '4/10 - QUAL É O PROPÓSITO DAS CARTAS DE CONSUMÍVEIS NO UT?', opcoes: ['A) MELHORAR TEMPORARIAMENTE OS ATRIBUTOS DO JOGADOR', 'B) COMPRAR NOVOS JOGADORES', 'C) MELHORAR PERMANENTEMENTE OS ATRIBUTOS DO JOGADOR', 'D) CURA, CONDICIONAMENTO FÍSICO E MODIFICADORES DE CONTRATO'], certa: 3},
    {Anunciado: '5/10 - O QUE AS CARTAS DE TÉCNICO FAZEM NO UT?', opcoes: ['A) MELHORAM OS ATRIBUTOS DOS JOGADORES', 'B) MELHORAM A QUÍMICA DA EQUIPE', 'C) PERMITEM QUE VOCÊ ALTERE A FORMAÇÃO DA EQUIPE', 'D) CONCEDEM ACESSO A MAIS JOGOS'], certa: 1},
    {Anunciado: '6/10 - QUAL É A SÉRIE ANUAL DE JOGOS DE FUTEBOL RIVAL DO EAFC?', opcoes: ['A) EFOOTBALL', 'B)  FOOTBALL MANAGER', 'C) FIFA STREET', 'D) TOP ELEVEN'] , certa: 0},
    {Anunciado: '7/10 - QUAL FOI O PRIMEIRO FIFA A INCLUIR A LICENÇA OFICIAL DA UEFA CHAMPIONS LEAGUE?', opcoes: ['A) FIFA 16', 'B) FIFA 17', 'C) FIFA 18', 'D) FIFA 19'] , certa: 2},
    {Anunciado: '8/10 - QUAL FOI A ÚLTIMA CARTA NO UT DE NEYMAR PELO SANTOS?', opcoes: ['A) FIFA 11', 'B) FIFA12', 'C) FIFA13', 'D) FIFA14'] , certa: 2},
    {Anunciado: '9/10 - QUAL FOI A PRIMEIRA EDIÇÃO DO FIFA A INCLUIR TIMES DE FUTEBOL FEMININO?', opcoes: ['A) FIFA 12', 'B) FIFA 16', 'C) FIFA 19', 'D) FIFA 20'] , certa: 1},
    {Anunciado: '10/10 - QUANTAS CARTAS COM 99 DE OVERALL TIVEMOS NO FIFA23?', opcoes: ['A) 15', 'B) 19', 'C) 25', 'D) 18'] , certa: 1},
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
