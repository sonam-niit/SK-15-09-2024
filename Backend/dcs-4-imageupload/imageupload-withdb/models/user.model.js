import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name:{type: String, required:true},
    email:{type: String, required:true},
    username:{type: String, required:true},
    password:{type: String, required:true},
    profile: String
})

const UserModel = mongoose.model('UserModel',UserSchema)
export default UserModel