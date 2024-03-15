const alunoController = require('../controllers/aluno');

module.exports = (app) =>{
    app.get('/aluno', alunoController.getAluno 
        //#swagger.tags = ["Aluno"]
        //#swagger.summary = 'Consulta dos alunos cadastrados'
        //#swagger.description = 'Retorna a lista de Alunos, Todos os que estão cadastrados'
    )
    app.post('/aluno', alunoController.postAluno
        //#swagger.tags = ["Aluno"]
        //#swagger.summary = 'Cadastra um novo aluno'
        //#swagger.description = 'Utilizado para cadastrar um novo aluno'
    )
    app.delete('/aluno/:id', alunoController.deleteAluno
        //#swagger.tags = ["Aluno"]
    )
    app.put('/aluno/:id', alunoController.putAluno
        //#swagger.tags = ["Aluno"]
    )
    app.patch('/aluno/:id', alunoController.patchAluno
        //#swagger.tags = ["Aluno"]
        //#swagger.summary = 'Consulta dos alunos cadastrados'
        //#swagger.description = 'Retorna a lista de Alunos, Todos os que estão cadastrados'
    )
}