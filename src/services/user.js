const db = require('../configs/pg')
const cript = require('../utils/salt')

const sql_insert = 
    `insert into users(usu_name, usu_salt, usu_password)
                        values ($1, $2, $3)`

const newUser = async (params) => {
    const {user, pass} = params
    const {salt, hashedPassword} = cript.criarUsuario(pass)
    return await db.query(sql_insert, [user, salt, hashedPassword])
}
const sql_get =`select * from users`

const getUser = async () => {
   result =  await db.query(sql_get, [])
    return {
        total:result.rows.length,
        users: result.rows
    }
}

const sql_delete = 
    `delete from users
     where usu_id = $1`

const deleteUser = async (params) => {
    await db.query(sql_delete, [params.id])
}
   
const sql_put = 
    `update users
        set usu_name = $2,
            usu_salt = $3,
            usu_password = $4,
     where usu_id = $1`

const getUserId = async (id) =>{
    const query = 'SELECT usu_name, usu_salt, usu_password FROM users WHERE usu_id = $1';
    result = await db.query(query, [id])
    return result.rows[0];
}
 
const putUser = async (params) => {
    const {id, name, salt, password} = params
    const {gen_salt, hashedPassword} = cript.criarUsuario(password)
    const userData = await getUserId(id)
    console.log(`SenhaParamas: ${password}\nSenha: ${userData.usu_password}\ncriptosenha:  ${hashedPassword}\nsalt-gen: ${gen_salt}\nSalt: ${userData.usu_salt}`)
    if(userData.usu_password == hashedPassword && gen_salt == userData.usu_salt){   
        console.log(`${password}\n ${hashedPassword}\n${gen_salt}\n${salt}`)    
        return await db.query(sql_put, [ id, name, salt, password])
    }else{
        return console.error('errou')
    }
}

 


module.exports.newUser = newUser
module.exports.getUser = getUser
module.exports.deleteUser = deleteUser
module.exports.putUser = putUser