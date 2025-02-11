const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const isLoggedIn = require("../middleware/varifyLogin");
const prisma = new PrismaClient()


router.post("/" ,isLoggedIn, async (req , res)=>{
    const {title , description , authorId} = req.body;
    const newBlog = await prisma.blog.create({
        data:{
            Title : title,
            description : description,
            authorId : req.user.id
        }
    });
    res.json({message : "blog added successfully" , 
        data:newBlog
    })
});


router.get("/:id" , async (req , res)=>{
    const id = req.params;
    const blog = await prisma.blog.findUnique({
        where:{
            id:parseInt(id)
        }
    })
    res.json({data : blog});
})

module.exports = router;