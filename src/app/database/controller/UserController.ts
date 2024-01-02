import User from '../schemas/UserSchema'
import database from '../database'

const saveUser = async (queryUser: any) =>{
    if(!database.connect()) return false

    const newUser = new User(queryUser)
    const disconnectDatabase = database.disconnect();
    return await newUser.save()
    await disconnectDatabase;
}

const userController = {
    saveUser
}

export default userController