import mongoose from "mongoose";

mongoose.set('strictQuery', true)

const dbname = "dindim"
const url = `mongodb+srv://wendelldev353:${process.env.DB_PWD}@cluster0.dcfurg5.mongodb.net/${dbname}?retryWrites=true&w=majority`

const connect = async () => {
    return await mongoose.connect(url)
}

const disconnect = async () => {
    return await mongoose.disconnect()
}

const database = {
    connect,
    disconnect
}

export default database