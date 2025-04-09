//CRUD Operation for Categories
import {CategoryModel} from '../models/category-model.js'

export const addCategory = async(name,description)=>{
    const newCategory= new CategoryModel({name,description});
    const resp = await newCategory.save();
    console.log('Category Added',resp)
}
export const getAllCategories = async()=>{
    const resp = await CategoryModel.find();
    console.log(resp)
}
export const deleteCategory = async(id)=>{
    const resp = await CategoryModel.findByIdAndDelete(id);
    console.log("Category Deleted")
}
//GetById and updateById