let jwt = require("jsonwebtoken");
const secret = "asdfghjkl";

function isLoggedIn(req , res , next){
    let token = req.headers.authorization;
    if(!token){
        return res.send("please login");
    }

    let decode = jwt.verify(token , secret); 
    if(!decode) return res.send("token invalid");


    req.user = decode;
    next();
}

module.exports = isLoggedIn;