//CRUD Operation for Categories
import {CategoryModel} from '../models/category-model.js'

export const addCategory = async(req,res)=>{
    const {name,description}=req.body
    const newCategory= new CategoryModel({name,description});
    const resp = await newCategory.save();
    res.status(201).send({message:'Category Added',resp})
}
export const getAllCategories = async(req,res)=>{
    const resp = await CategoryModel.find();
    res.status(200).send(resp)
}
export const deleteCategory = async(req,res)=>{
    const id= req.params.id;
    const resp = await CategoryModel.findByIdAndDelete(id);
    res.status(200).send({message:"Category Deleted"})
}
//GetById and updateById