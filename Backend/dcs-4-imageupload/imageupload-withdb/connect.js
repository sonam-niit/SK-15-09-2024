import mongoose from 'mongoose'

export const connect = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/auth');
        console.log('connected...')
    } catch (error) {
        console.log('error while connecting DB',error)
    }
}