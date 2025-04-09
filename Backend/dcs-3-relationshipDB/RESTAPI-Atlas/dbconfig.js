import mongoose from "mongoose";
// const MongoDBURL='mongodb://localhost:27017/ems'
const MongoDBURL='add-your-atlas-cluster-url-with-username-password'
//After URL you can add /name-of-database 
//If you will not add db name your data will be stored in test database
export const connect = async()=>{
    try {
        await mongoose.connect(MongoDBURL);
        console.log('Connected.....')
    } catch (error) {
        console.log('Error in Connection: ',error)
    }
}