import express from 'express'
import user from '../models/user.js'

const router = express.Router();
 
 router.post('/register',async (req,res)=>{

    const {name,email,password} = req.body;
    const user = new User({name,email,password});

    try{
        await user.save();
        res.status(201).send({user});
    } catch(error){
        res.status(400).send(error);
    }
 });


export default router;