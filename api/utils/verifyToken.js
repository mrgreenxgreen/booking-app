import jwt from "jsonwebtoken";
import { createError } from "./error.js";


export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;

    if(!token){
        const error = createError(401, "You are not authenticated")
        return res.status(401).json(error)
    }

    jwt.verify(token, process.env.JWT, (err, user)=>{
        const error = createError(403, "Token is not valid");
        if(err) return res.status(403).json(error);
        req.user = user;
        next();
    });
};

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res, next,()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            return next(createError(403, "You are not authorized."))
        }
    })
};

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res, ()=>{
        if( req.user.isAdmin){
            next();
        }else{
            const error = createError(403, "You are not authorized");
            return res.status(403).json(error);
        }
    })
};
