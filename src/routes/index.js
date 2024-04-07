const Aluno = require('./aluno.js');
const usuario = require('./user.js');

module.exports = (app) => {
    Aluno(app);
    usuario(app);
}