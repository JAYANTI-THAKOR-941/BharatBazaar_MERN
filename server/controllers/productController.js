import Product from "../models/Product.js";


export const createProduct = async (req,res)=>{
    try{
        let product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch(error){
        res.status(501).json({error:error.message});
    }
}

export const getProducts = async (req,res)=>{
    try{
        let products = await Product.find();
        res.status(201).json(products);
    }
    catch(error){
        res.status(501).json({error:error.message});
    }
}


export const getProductById = async(req,res)=>{
    try{
        let product = await Product.findById(req.params.id);
        if(!product){
            res.status(401).json({message:"Product Not Found."});
        }
        res.status(201).json(product);
    }
    catch(error){
        res.status(501).json({error:error.message});
    }
}

export const updateProduct = async (req,res)=>{
    try{
        let updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(201).json(updatedProduct);
    }
    catch(error){
        res.status(501).json({error:error.message});
    }
}

export const deleteProduct = async (req,res)=>{
    try{
        let deteledProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(201).json({message:"Product Deleted Successfully.!!"});
    }
    catch(error){
        res.status(501).json({error:error.message});
    }
}