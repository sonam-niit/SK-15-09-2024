//CRUD Operation for Products
import { ProductModel } from "../models/product-model.js";

export const addproduct=async(req,res)=>{
    const {name,price,description,category}=req.body
    const newProduct = new ProductModel({name,price,description,category});
    const resp = await newProduct.save();
    res.status(201).send({message:'Product Added',resp})
}
export const getAllProducts=async(req,res)=>{
    const resp = await ProductModel.find();
    res.status(200).send(resp)
}
export const deleteById=async(req,res)=>{
    const id = req.params.id;
    const resp=await ProductModel.findByIdAndDelete(id);
    res.status(200).send({data:resp,message:'Product Deleted'})
}