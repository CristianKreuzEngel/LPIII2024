const usuarioService = require('../services/user')

const newUser = async (req, res, next) => {
    try {
        const retorno = await usuarioService.newUser(req.body)
        res.status(201).json(retorno)
    }catch(err){
        res.status(500).send(err.message)
    }
}
const deleteUser = async (req, res, next) => {
    try {
        const retorno = await usuarioService.deleteUser(req.params)
        res.status(206).json(retorno)
    }catch{
        res.status(500).send(err.message)
    }
}
const getUser = async (req, res, next) => {
    try {
        const retorno = await usuarioService.getUser()
        res.status(200).json(retorno)
    } catch (err){
        res.status(500).send(err.message)
    }
}
const putUser = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        const retorno = await usuarioService.putUser(params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err.message))
    } catch (err){
        res.status(500).send(err.message)
    }
}
const patchPassword = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        const retorno = await usuarioService.patchPassword(params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err.message))
    } catch (err){
        res.status(500).send(err.message)
    }
}

module.exports.newUser = newUser
module.exports.getUser = getUser
module.exports.deleteUser = deleteUser
module.exports.putUser = putUser
module.exports.patchPassword = patchPassword