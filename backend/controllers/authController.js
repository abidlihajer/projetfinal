const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp=async(req,res)=>{
    const {username,email,password,}=req.body
    try {
        const checkuser=await User.findOne({email})
        if(checkuser){
            return res.status(401).json({errors:[{msg:"user already exists"}]})
        }
        const user= new User({
            username,email,password
        })
        user.password=await bcrypt.hash(password,10)
        await user.save()

        const payload={
            id:user._id
        }
        const token=jwt.sign(payload,process.env.secret_key)

        res.status(201).json({user,msg:"user craeted",token})
    } catch (error) {
       res.status(500).send('server error') 
    }
}

exports.signIn=async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({errors:[{msg:"bad credentials"}]})
        }
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({errors:[{msg:"bad credentials"}]})
        }

    
        const payload={
            id:user._id
        }
        const token=jwt.sign(payload,process.env.secret_key,{expiresIn:'3d'})

        res.status(200).json({user,msg:"login with success",token})
    } catch (error) {
        res.status(500).send('server error')
    }
}

exports.current=async(req,res)=>{
    try {
        const user=await User.findById(req.user.id)
        res.send(user)
    } catch (error) {
        res.status(500).send('server error')
    }
}

exports.deleteUser= async (req,res) => {
    const{id} = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).send("user deleted...");
    } catch (error) {
       res.status(500).send("server error"); 
    }
}

exports.updateUser= async (req,res) => {
    console.log(req.body)
    const{id} = req.params;
    try {
        const user = await User.findByIdAndUpdate(id,{$set: {...req.body}},{new: true});
        res.status(200).send({msg:"user updated",user });
        
    } catch (error) {
       res.status(500).send("server error"); 
    }
}

