
import Category from "../models/Category.js";

export const createCategory = async (req,res)=>{
    try{
        const category = await Category.create(req.body.name);
        res.status(201).json(category);
    }
    catch(error){
        res.status(501).json({message:error.message});
    }
}

export const getCategory = async(req,res)=>{
    try{
        const category = await Category.find();
        res.status(201).json(category);
    }
    catch(error){
        res.status(501).json({message:error.message});
    }
}