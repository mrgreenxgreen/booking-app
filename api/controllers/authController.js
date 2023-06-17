import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";

export  const register = async (req,res,next) =>{

    try{
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password,salt);

 

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })

        await newUser.save()
        res.status(200).send('User has been created')
    }catch(err){
        next(err)
    }
}

export const login = async (req,res,next) =>{
    try{
        const user = await User.findOne({ username:req.body.username })
        if(!user){
            const error = createError(404,"user not found!");
            return res.status(404).json(error);
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password)
        if(!isPasswordCorrect){
            error = createError(400, "Wrong password or username");
            return res.status(400).json(error);
        }   

        res.status(200).json(user)
    } catch(err){
        next(err);
    }
}







export default function authController(){
    
}
