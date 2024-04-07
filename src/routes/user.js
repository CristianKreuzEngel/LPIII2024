const usuarioController = require('../controllers/user')


module.exports = (app) => {
    app.post('/user', usuarioController.newUser)
    app.get('/user', usuarioController.getUser)
    app.delete('/user/:id', usuarioController.deleteUser)
    app.put('/user/:id', usuarioController.putUser)
}