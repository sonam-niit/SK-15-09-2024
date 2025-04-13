import UserModel from '../models/user.model.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const register = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;
        if (!name || !email || !username || !password)
            return res.status(406).send({ message: 'All Fields are mandatory' })
        let user = await UserModel.findOne({ email });
        if (user)
            return res.status(406).send({ message: 'EmailId is already registered' })
        user = await UserModel.findOne({ username });
        if (user)
            return res.status(406).send({ message: 'Username is already taken by Someone' })
        const hashPassword = await bcrypt.hash(password,12);
        const newUser = new UserModel({ name, email, username, password:hashPassword })
        const resp= await newUser.save()
        return res.status(201).send({message:"User Registered",userId: resp._id})
    } catch (error) {
        return res.status(500).send({message: 'Some error occured',error})
    }
}
export const getUserprofile = async (req, res) => {
    try {
        //const username = req.user.username;//get from middleware req
        // const user = await UserModel.findOne({username});
        const user = await UserModel.findOne({_id:req.user.id})
        if (user)
            return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({message: 'Some error occured',error})
    }
}
export const getAllUsers = async (req, res) => {
    try {
        // const users = await UserModel.find({},{password:0})
        const users = await UserModel.find().select('-password');//exclude the password field
        return res.status(200).send(users)
    } catch (error) {
        return res.status(500).send({message: 'Some error occured',error})
    }
}
export const deleteUserById = async (req, res) => {
    try {
        const id= req.id;//coming from middleware
        const resp = await UserModel.findByIdAndDelete(id);
        return res.status(200).send({message:'user Deleted'})
    } catch (error) {
        return res.status(500).send({message: 'Some error occured',error})
    }   
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if ( !email || !password)
            return res.status(406).send({ message: 'All Fields are mandatory' })
        let user = await UserModel.findOne({ email });
        if (!user)
            return res.status(403).send({ message: 'This EmailId is not registered with us' })
        
        if(await bcrypt.compare(password,user.password)){
            //create Token
            const token=jwt.sign({id:user._id,username:user.username},"1234567890abcdefgh")
            // res.cookie('token',token,{
            //     maxAge: 24 * 60 * 60 * 1000, //1 day
            //     httpOnly: true,  //cannotbe accessed by JS
            //     secure: false // set this to true for using HTTPS
            // })
            //return res.status(200).send({message:"User LoggedIn"})
            return res.status(200).send({message:"User LoggedIn",token})
        }
        else
        return res.status(401).send({message:"invalid Credentials"})
    } catch (error) {
        return res.status(500).send({message: 'Some error occured',error})
    }
}
