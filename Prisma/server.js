const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const prisma = new PrismaClient()
app.use(express.json()); //to pass json data
console.log(require("./routes/userRoutes"));
console.log(require("./routes/blogRoutes"))

app.use("/api/users" , require("./routes/userRoutes"));

app.use("/api/auth" , require("./routes/auth"));

app.use("/api/blogs" , require("./routes/blogRoutes"));

app.use("/api/like" , require("./routes/likeRoutes"));


app.listen(4545 , ()=> {
    console.log("Server is running at port http://localhost:4545")
})