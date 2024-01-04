import User from '../schemas/UserSchema'
import database from '../database'

const findUser = async (emailInput: string) => {
    try{
        await database.connect()
    } catch(err){
        console.log(err)
    }

    const teste = await User.find({email: emailInput})
    await database.disconnect()
    try{
        teste[0].email
        return "E-mail já cadastrado"
    } catch{
        return 'Não encontrado'
    }
}

export default findUser