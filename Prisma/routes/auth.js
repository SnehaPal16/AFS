const express = require("express");
const router = express.Router();
let jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const secret = "asdfghjkl";

router.post("/login" , async (req , res)=>{
    const {email , password} = req.body;
    const user  = await prisma.user.findUnique({
        where:{
            email : email  
        }
    });
    if(!user) return res.status(404).json({message : "User does not exists"});
    if(user.password != password) return res.json({message : "Password is incorrect"});

    let token = jwt.sign(user , secret);
    res.json({message : "User logged in " , token : token});
})

router.post("/register" , async (req , res)=>{
    const {email , password , name , isAdmin} = req.body;
    const newUser = await prisma.user.create({
        data:{
            email : email,
            password : password,
            name : name,
            isAdmin: isAdmin || false
        }
    })

    let token = jwt.sign({id : newUser.id , email: newUser.email , name : newUser.name , isAdmin : newUser.isAdmin} , secret);
    res.json({message : "User registered" , token : token});
})
module.exports = router;