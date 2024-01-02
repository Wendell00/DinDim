import {model, Schema, models} from 'mongoose'

const UserSchema = new Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    active: {type: Boolean, default: false}
})

const User = models.User || model("User", UserSchema)

export default User