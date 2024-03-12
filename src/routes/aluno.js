const alunoController = require('../controllers/aluno');

module.exports = (app) =>{
    app.get('/aluno', alunoController.getAluno)
    app.post('/aluno', alunoController.postAluno)
    app.delete('/aluno/:id', alunoController.deleteAluno)
    app.put('/aluno/:id', alunoController.putAluno)
    app.patch('/aluno/:id', alunoController.patchAluno)
}