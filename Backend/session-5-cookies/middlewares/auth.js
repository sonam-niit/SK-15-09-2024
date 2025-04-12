const auth = (req,res,next)=>{
    const username= req.cookies.username;
    if(!username)
        return res.status(401).send({message:'UnAuthorized Access,Login First'})

    req.username=username;
    next();//sent to next path
} 

export default auth