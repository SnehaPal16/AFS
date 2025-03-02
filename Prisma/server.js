const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const prisma = new PrismaClient();
const cors = require('cors');
app.use(cors())
app.use(express.json()); //to pass json data
// console.log(require("./routes/userRoutes"));
// console.log(require("./routes/blogRoutes"))

app.use("/api/users" , require("./routes/userRoutes"));
app.use("/api/auth" , require("./routes/auth"));
app.use("/api/blogs" , require("./routes/blogRoutes"));
app.use("/api/like" , require("./routes/likeRoutes"));
app.use("/api/admin" , require("./routes/adminRoutes"));

app.get("/verify/:token/:userid" , async (req , res)=>{
    let {token , userid} = req.params;
    let isToken = await prisma.token.findFirst({
        where:{
            token : parseInt(token),
            userId: parseInt(userid)
        }
    })
    if(!isToken){
        return res.send("Invalid Link");
    }
    else{
        await prisma.user.update({
            where:{
                id : parseInt(userid)
            },
            data:{
                verified : true
            }
        })
        res.send("Email verified please login to continue");
    }
})

app.get('/' , (req , res)=>{
    res.send("Hello World")
})


app.listen(4545 , ()=> {
    console.log("Server is running at port http://localhost:4545")
})