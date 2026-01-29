import jwt from 'jsonwebtoken';

export const isAuth = (req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(401).json({message:"Token missing.!!"});
    }

    const token = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.userId = decoded.id;
        req.userRole = decoded.role;
        next();
    }
    catch(error){
        res.status(501).json({message:error.message});
    }
}

export const isAdmin = (req,res,next)=>{
    if(req.userRole !== 'admin'){
        res.status(401).json({message:"Access admin only.!"});
    }
    next();
}