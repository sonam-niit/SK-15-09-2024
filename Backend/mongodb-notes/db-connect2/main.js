import {connect} from './connect.js'
import {EmployeeModel} from './model.js'

connect();
async function deleteById(id){
    try {
        const resp= await EmployeeModel.findByIdAndDelete(id)
        console.log(resp, "Deleted Successfully")
    } catch (error) {
        console.log('Error occured',error)
    }
}
async function getByName(name){
    try {
        const resp= await EmployeeModel.find({name});
        console.log(resp)
    } catch (error) {
        console.log('Error occured',error)
    }
}
async function updateById(name,country,id){
    try {
        const resp= await EmployeeModel.findByIdAndUpdate(id,{name,country},{new:true})
        console.log(resp)
    } catch (error) {
        console.log('Error occured',error)
    }
}
async function getAllEmployees(){
    try {
        const resp= await EmployeeModel.find();
        console.log(resp)
    } catch (error) {
        console.log('Error occured',error)
    }
}
async function addEmployee(name,email,country){
    try {
        const newEmployee = new EmployeeModel({name,email,country})
        const resp=await newEmployee.save();
        console.log('Employee created',resp)
    } catch (error) {
        console.log('Error occured',error)
    }
}
//addEmployee('sonam','sonam@gmail.com','India');
//getAllEmployees()
//getByName('sonam')
//updateById('Sonam Soni','India',"67f2a498808b5f893328b8c0")
deleteById("67f2a498808b5f893328b8c0")