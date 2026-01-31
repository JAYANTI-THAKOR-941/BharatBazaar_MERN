import subCategory from "../models/SubCategory.js";

export const createSubCategory = async(req,res)=>{
    try{
        const subCategories = await subCategory.create({
            name:req.body.name,
            category:req.body.category,
        });
        res.status(201).json(subCategories);
    }
     catch(error){
        res.status(501).json({message:error.message});
    }
}

export const getSubCategory = async(req,res)=>{
    try{
        const subCategories = await subCategory.find().populate('category','name');
        res.status(201).json(subCategories);
    }
    catch(error){
        res.status(501).json({message:error.message});
    }
}