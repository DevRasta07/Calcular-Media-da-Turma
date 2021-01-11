// Função que cria um aluno novo
function criarAluno(nome, serie, n1, n2, n3) {

    return {
        nome: nome,
        serie: serie,
        nota1: n1,
        nota2: n2,
        nota3: n3,
        calcMedia: calcMedia
    }
    
}

// Função que calcula a média
function calcMedia() {

    var nota1 = this.nota1
    var nota2 = this.nota2
    var nota3 = this.nota3
    var media = (nota1 + nota2 + nota3) / 3

    return media

}

// Criando alunos
var bernardo = criarAluno('Bernardo', "1° Ano EM", 8, 8, 8)
var joao = criarAluno('João', "9° Ano", 6, 8, 7)
var ricardo = criarAluno('Ricardo', "9° Ano", 7, 6, 9)
var leticia = criarAluno('Letícia', "8° Ano", 10, 9, 8.5)
var ana = criarAluno('Ana', "9° Ano", 10, 9, 8)

// Criando a turma
var turma = [bernardo, joao, ricardo, leticia, ana]

// Transformando os elementos em variáveis
var inputNomeAluno = document.getElementById('nomeAluno')
var inputNota1 = document.getElementById('nota1')
var inputNota2 = document.getElementById('nota2')
var inputNota3 = document.getElementById('nota3')
var btn = document.querySelector('button')

// Criando uma função para ser executada ao clicar o botão
btn.addEventListener('click', function (){

    // 1 - Achar o aluno que o nome foi digitado
    var nomeAluno = inputNomeAluno.value
    var nota1 = Number(inputNota1.value)
    var nota2 = Number(inputNota2.value)
    var nota3 = Number(inputNota3.value)

    function acharAluno(aluno) {
        return aluno.nome === nomeAluno
    }

    var aluno = turma.find(acharAluno)

    if (aluno === undefined) {
        console.log("ERROR")
    }
    else {
        console.log(aluno.nome)
    }

    /* ---------------------------------------------------------------------------------------------------------- */

    // 2 - Substituir as notas fictíceas e colocar as notas  digitadas em suas devidas propriedades
    aluno.nota1 = nota1
    aluno.nota2 = nota2
    aluno.nota3 = nota3

    /* ---------------------------------------------------------------------------------------------------------- */

    // 3 - Criar uma propriedade chamada "media" para lá colocar a média das notas desse aluno
    var media = aluno.calcMedia()
    
    Object.assign(aluno, {media: media})
    console.log(aluno)
    
    /* ---------------------------------------------------------------------------------------------------------- */

    // 4 - Mostrar na tela a média das notas daquele aluno

    document.write(media)

})
