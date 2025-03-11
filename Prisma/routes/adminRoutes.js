const express = require("express");
const router = express.Router();
let jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get("/users", async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
})

router.get("/blogs", async (req, res) => {
    try {
        const blogs = await prisma.blog.findMany();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch blogs" });
    }
})

router.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const blog = await prisma.blog.deleteMany({
            where: {
                authorId: parseInt(id)
            }
        })
        console.log(blog)
        const user = await prisma.user.delete({
            where: {
                id: parseInt(id)
            }
        })
        console.log(user)
        res.status(200).json({ user, blog });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete user" });
    }
})

module.exports = router;