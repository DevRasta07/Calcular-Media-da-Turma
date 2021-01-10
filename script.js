function criarAluno(nome, serie, n1, n2, n3) {
    return {
        nome: nome,
        serie: serie,
        nota1: n1,
        nota2: n2,
        nota3: n3,
        media: () => {
            var nota1 = this.nota1
            var nota2 = this.nota2
            var nota3 = this.nota3
            var media = (nota1 + nota2 + nota3) / 3
            return media
        }
    }
}
