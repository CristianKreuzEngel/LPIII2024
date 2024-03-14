const db = require('../configs/pg');

const sql_insert = 
    `insert into alunos(id, nome, sobrenome, periodo, observacao)
                        values ($1, $2, $3, $4, $5)`

const postAluno = async (params) => {
    const {id, nome, sobrenome, periodo, observacao } = params
    return await db.query(sql_insert, [id, nome, sobrenome, periodo, observacao])
}
const sql_get =`select id,
                       nome,
                       sobrenome,
                       periodo,
                       observacao
                    from alunos`

const getAluno = async () => {
    let aluno = {}
    await db.query(sql_get)
            .then(ret => aluno ={total: ret.rows.length, alunos: ret.rows })
            .catch(err => aluno = err.stack )
    return aluno
}

const sql_delete = 
    `delete from alunos
     where id = $1`

const deleteAluno = async (params) => {
    const {id} = params
    await db.query(sql_delete, [id])
}

const sql_put = 
    `update alunos
        set nome = $2,
            sobrenome = $3,
            periodo = $4,
            observacao = $5
     where id = $1`

const putAluno = async (params) => {
    const {id, nome, sobrenome, periodo, observacao} = params
    return await db.query(sql_put, [id, nome, sobrenome, periodo, observacao])
}


const sql_patch =
        `update alunos
            set`

const patchAluno = async (params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if(params.nome) {
        countParams ++
        fields += ` nome = $${countParams}`
        binds.push(params.nome)
    }
    if (params.sobrenome) {
        countParams ++
        fields += (fields?',':'') + ` sobrenome = $${countParams} `
        binds.push(params.sobrenome)
      }
      if (params.periodo) {
        countParams ++
        fields += (fields?',':'') + ` periodo = $${countParams} `
        binds.push(params.periodo)
      }
      if (params.observacao) {
        countParams ++
        fields += (fields?',':'') + ` observacao = $${countParams} `
        binds.push(params.observacao)
      }
      let sql = sql_patch + fields + ' where id = $1 '
      console.log(sql)
      return await db.query(sql, binds)
}    
       
module.exports.postAluno = postAluno;
module.exports.getAluno = getAluno;
module.exports.deleteAluno = deleteAluno
module.exports.putAluno = putAluno
module.exports.patchAluno = patchAluno