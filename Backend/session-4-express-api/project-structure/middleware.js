export function validate(req,res,next){
    const {name,email}=req.body;
    if(!name || !email)
        return res.send('All fields are mandatory')

    //to pass it to next middleware or controller
    req.user={name,email}
    next()
}

