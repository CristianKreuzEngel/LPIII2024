const alunoController = require('../controllers/aluno');

module.exports = (app) =>{
    app.get('/aluno/:name', alunoController.getAluno)
    app.post('/aluno', alunoController.postAluno)
}