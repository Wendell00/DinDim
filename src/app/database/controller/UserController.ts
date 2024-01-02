import User from '../schemas/UserSchema'
import database from '../database'

const saveUser = async (queryUser: any) =>{
    try{
        await database.connect()
    } catch(err){
        console.log(err)
    }

    const newUser = new User(queryUser)
    return await newUser.save().then(async () =>{{
        await database.disconnect()
    }})
}

const userController = {
    saveUser
}

export default userController