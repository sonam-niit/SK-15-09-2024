import mongoose from "mongoose";
export const connect = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/ems');
        console.log('Connected.....')
    } catch (error) {
        console.log('Error in Connection: ',error)
    }
}