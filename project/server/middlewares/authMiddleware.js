const jwt =  require('jsonwebtoken');

module.exports = function(req, res, next){

    try{

        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        const verifiedToken = jwt.verify(token, process.env.SECRET_KEY)
        console.log(verifiedToken)
        req.body.userId = verifiedToken.userId;
    
        next();

    }catch(err){
        res.send({
            success : false,
            message : "Invalid token"
        })
    }

}


