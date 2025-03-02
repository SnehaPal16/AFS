const express = require("express");
const router = express.Router();
let jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/users" , async (req , res)=>{
    const users = await prisma.user.findMany();
    res.json(users);
})

router.get("/blogs" , async (req , res)=>{
    const blogs = await prisma.blog.findMany();
    res.json(blogs);
})

router.delete("/users/:id" , async (req , res)=>{
    const {id} = req.params;
    const user = await prisma.user.delete({
        where:{
            id : parseInt(id)
        }

    })
    res.json(user);
})

module.exports = router;