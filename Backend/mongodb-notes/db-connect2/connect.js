import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/ums')
        console.log('DB Collected...')
    } catch (error) {
        console.log('Error while connecting',error)
    }
    
}