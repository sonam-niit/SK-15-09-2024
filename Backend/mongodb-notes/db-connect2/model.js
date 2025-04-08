import mongoose from "mongoose";

const emplSchema = mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    country: { type: String, required: true },
    date: {type:Date, default: Date.now}

})

export const EmployeeModel=mongoose.model('employee',emplSchema)