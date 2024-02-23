const getAluno = async (params) => {
    let aluno = {}
    if(params.name === "Cristian") {
        aluno.id = 19283
        aluno.nome = "Cristian"
        aluno.sobrenome = "Kreuz Engel"
        aluno.notas = []
        aluno.notas.push(10)
        aluno.notas.push(9)
    }else{
        throw "Aluno não cadastrado!"
    }
    return aluno
}

module.exports.getAluno = getAluno;