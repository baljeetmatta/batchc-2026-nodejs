const jwt=require("jsonwebtoken");

function authMiddleware(req,res,next)
{
    try{
    const authHeaders= req.headers.authorization;
        if(!authHeaders)
            return res.status(401).json({
        message:"No Headers/Token"});

        //Bearer Token
       const token= authHeaders.split(" ")[1];
       if(!token)
       {
        return res.status(401).json({
        message:"No Headers/Token"});

       }
      const decoded= jwt.verify(token,process.env.JWT_KEY)
       req.user=decoded;
       next();

    }catch(e){
        return res.status(401).json({
            message:"Error in evaluating token"
        })
    }



    }

    module.exports=authMiddleware;
    