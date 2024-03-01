const db = require('../configs/pg');

const sql = 
    `insert into alunos(id, nome, sobrenome, periodo, observacao)
                        values ($1, $2, $3, $4, $5)`

const postAluno = async (params) => {
    const {id, nome, sobrenome, periodo, observacao } = params
    await db.query(sql, [id, nome, sobrenome, periodo, observacao])
}

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

module.exports.postAluno = postAluno;
module.exports.getAluno = getAluno;