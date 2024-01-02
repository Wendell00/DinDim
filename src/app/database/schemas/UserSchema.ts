import {model, Schema, models} from 'mongoose'

const UserSchema = new Schema({
    name: {type: String, default: ''},
    email: {type: String, required: true},
    password: {type: String, required: true},
    active: {type: Boolean, default: true}
})

const User = models.User || model("User", UserSchema)

export default User