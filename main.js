class Peca {
    constructor(nome, peso) {
        this.nome = nome;
        this.peso = peso;
    }
}

class Vazio extends Peca{
    constructor(nome,peso) {
        super(nome,peso);
    }
}

//Objetos do tabuleiro vazio

const oa = new Vazio("oa", 0);
const ob = new Vazio("ob", 0);
const oc = new Vazio("oc", 0);
const od = new Vazio("od", 0);
const oe = new Vazio("oe", 0);
const of = new Vazio("of", 0);
const oh = new Vazio("oh", 0);
const oi = new Vazio("oi", 0);
const og = new Vazio("og", 0);

// Cria um vetor de 9 posições

const tabuleiro = [oa,ob,oc,od,oe,of,og,oh,oi];
var Peca1;
var turno;

// Classe base para as peças

class Azul extends Peca {
    constructor(nome, peso) {
        super(nome, peso);
    }
}

const aa = new Azul("aa", 5);
const ab = new Azul("ab", 3);
const ac = new Azul("ac", 3);
const ad = new Azul("ad", 1);
const ae = new Azul("ae", 1);
const af = new Azul("af", 1);

class Vermelho extends Peca {
    constructor(nome, peso) {
        super(nome, peso);
    }
}

const va = new Vermelho("va", 5);
const vb = new Vermelho("vb", 3);
const vc = new Vermelho("vc", 3);
const vd = new Vermelho("vd", 1);
const ve = new Vermelho("ve", 1);
const vf = new Vermelho("vf", 1);

//0.5
function verificarPeca(troca) 
{
    for (let i = 0; i < tabuleiro.length; i++) 
    {
        if (tabuleiro[i].nome == troca.nome) 
        {
            console.log("Duas vezes não! :P")
            return false;
        }
    }
    return true;
}

//1
function selecionarPeca(troca) 
{
    if(verificarPeca(troca))
    {
    Peca1 = troca
    return Peca1
    }
    else{return false;}
}

//2
function selecionarposi(posicao) 
{
    if(Peca1 == null){return false;}
    else
    {
    inserirPeca(posicao,Peca1)
    }
}

//2.5
function verificarLugar(posicao)
{   
    if (tabuleiro[posicao].peso == 0) {return true;}

    if(tabuleiro[posicao].peso < Peca1.peso) {return true;}
    
    else {console.log("Lugar ocupado!");}
}

//3
let ultimaPecaInserida = null; // Variável para rastrear a última peça inserida

function inserirPeca(posicao, Peca1) {
    if (verificarPeca(Peca1)) {
        if (verificarLugar(posicao, Peca1)) {
            // Verifica se a peça inserida é do mesmo tipo que a última inserida
            if (ultimaPecaInserida && ultimaPecaInserida.constructor === Peca1.constructor) {
                console.log(`Agora é a vez do seu amigo!`);
                return;
            }

            tabuleiro.splice(posicao, 1, Peca1);;

            // Atualiza a variável de controle para a última peça inserida
            ultimaPecaInserida = Peca1;

            // Verifica a vitória após a inserção da peça
            verificarVitoria();

            // Move a div da peça para a posição do tabuleiro correspondente
            const pecaDiv = document.getElementById(`${Peca1.nome}`);
            const container = document.getElementById(`posicao${Number(posicao) + 1}`);
            
            // Verifica se há uma div na posição especificada
            if (container.hasChildNodes()) {
                // Substitui a div existente pela nova div
                container.replaceChild(pecaDiv, container.firstChild);
            } else {
                // Adiciona a nova div ao container
                container.appendChild(pecaDiv);
            }
        }
    }
}

//X
function verificarVitoria() {
    const combinacoesVitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6] // Diagonais
    ];

    for (let combinacao of combinacoesVitoria) {
        const [posicao1, posicao2, posicao3] = combinacao;
        const peca1 = tabuleiro[posicao1];
        const peca2 = tabuleiro[posicao2];
        const peca3 = tabuleiro[posicao3];

        if (peca1 && peca2 && peca3) {
            if (peca1.constructor === peca2.constructor && peca1.constructor === peca3.constructor) {
                if (peca1.constructor !== Vazio) {
                    let nome = peca1.constructor.name
                    document.getElementById("mensagem").innerHTML = "Vitória do " + nome + "!";
                    openModal();
                }
            }
        }
    }

    return null;
}

//Modais de informação

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function openinfo() {
    document.getElementById("myModal2").style.display = "block";
}

function openinfo2() {
    document.getElementById("myModal3").style.display = "block";
}

function openinfo3() {
    document.getElementById("myModal4").style.display = "block";
}

function openinfo4() {
    document.getElementById("myModal5").style.display = "block";
}

//X
function verificarTabuleiro(peca,posicao) 
{
    for (let i = 0; i < tabuleiro.length; i++) 
    {
        if (tabuleiro[i] == null) 
        {
            return true; // Retorna falso se encontrar uma posição vazia
        }
    }
    return false;
}

//X
function reiniciarJogo() 
{
    location.reload();
}

