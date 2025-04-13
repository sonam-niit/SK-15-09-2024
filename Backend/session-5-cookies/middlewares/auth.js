import jwt from 'jsonwebtoken';
const SECRETKEY = "1234567890abcdefgh"

//verify using HTTP Headers
const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token)
        return res.status(403).send({ message: "Unauthorized Access" })
    const ogToken = token.split(' ')[1];
    if (!ogToken)
        return res.status(403).send({ message: "Unauthorized Access" })
    try {
        const decodedData = jwt.verify(ogToken, SECRETKEY)
        req.user = decodedData
        req.id= req.params.id
        next();//sent to next path
    } catch (error) {
        return res.status(403).send({ message: "Unauthorized Access" })
    }

}
export default auth

//verify Using Coookies
// const auth = (req,res,next)=>{
//     // const username= req.cookies.username;
//     const token= req.cookies.token;
//     if(!token)
//         return res.status(401).send({message:'UnAuthorized Access,Login First'})

//     const decodedData=jwt.verify(token,SECRETKEY)
//     req.user=decodedData
//     next();//sent to next path
// }

// export default auth