const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "No seu aniversário de 10 anos, você acaba acordando tarde para pegar seu Pokémon inicial e começar sua jornada como um treinador pokémon. Porém, ainda sim há 2 iniciais disponíveis para escolher. Qual você irá escolher?",
        alternativas: [
            {
                texto: "Pikachu",
                afirmacao: "Você escolheu Pikachu como seu inicial"
            },
            {
                texto: "Eevee",
                afirmacao: "Você escolheu Eevee como seu inicial"
            }
        ]
    },
    {
        enunciado: "Ao sair do laboratório e andar por um tempo, você se depara com uma bifurcação que pode levar á 2 lugares diferentes. O caminho da esquerda leva à um grande campo onde tem um forte presença de Pokémon de tipo planta, e o caminho da direita leva à uma praia com vários Pokémon de tipo água. Qual caminho você irá seguir?",
        alternativas: [
            {
                texto: "Esquerda",
                afirmacao: "Ao se deparar com uma bifurcação, você decide ir pela esquerda ver os Pokémon do campo"
            },
            {
                texto: "Direita",
                afirmacao: "Ao se deparar com uma bifurcação, você decide ir pela direita ver os Pokémon do praia"
            }
        ]
    },
    {
        enunciado: "Após seguir pelo caminho escolhido, você se depara com um pequeno Pokémon chamado Pidgey, que aparenta ser pacífico. Porém esse Pidgey em específico estava afim de uma batalha. O que você irá fazer?",
        alternativas: [
            {
                texto: "Batalhar contra o Pidgey",
                afirmacao: "Você decide encarar o desafio e usa seu inicial na batalha contra um Pidgey selvagem. Depois uma longa batalha contra o monstrinho, você consegue ganhar do Pidgey selvagem"
            },
            {
                texto: "Tentar fugir",
                afirmacao: "Com muito medo de perder uma batalha contra um Pidgey selvagem, você decide tentar fugir da batalha. Você até consegue, mas não antes de você e seu Pokemon inicial levarem uma bicadas na cabeça!"
            }
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            {
                texto: "Esquerda",
                afirmacao: " "
            },
            {
                texto: "Direita",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            {
                texto: "Esquerda",
                afirmacao: "Você fica admirado com as diversas criaturas que vivem nesse mundo, tendo um maior desejo de continuar sua aventura por esse vasto mundo!"
            },
            {
                texto: "Direita",
                afirmacao: "Você fica admirado com as diversas criaturas que vivem nesse mundo, tendo um maior desejo de continuar sua aventura por esse vasto mundo!"
            }
        ]
    },

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Nessa jornada...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

