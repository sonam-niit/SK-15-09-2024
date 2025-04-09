//CRUD Operation for Products
import { ProductModel } from "../models/product-model.js";

export const addproduct=async(name,price,description,category)=>{
    const newProduct = new ProductModel({name,price,description,category});
    const resp = await newProduct.save();
    console.log('product added')
}
export const getAllProducts=async()=>{
    const resp = await ProductModel.find();
    console.log(resp)
}
//delete, update, getbyId