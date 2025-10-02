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
                afirmacao: "afirmacao"
            },
            {
                texto: "Eevee",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Ao sair do laboratório e andar por um tempo, você se depara com uma bifurcação que pode levar á 2 lugares diferentes. O caminho da esquerda leva à um grande campo onde tem um forte presença de Pokémon de tipo planta, e o caminho da direita leva à uma praia com vários Pokémon de tipo água. Qual caminho você irá seguir?",
        alternativas: [
            "Esquerda",
            "Direita"
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
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
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Depois dessa aventura...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();