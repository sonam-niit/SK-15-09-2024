import express from 'express'
import { validate } from './middleware.js';
const app= express();
let users=[];
app.use(express.json()); //json parser
app.get('/users',(req,res)=>{
    res.status(200).send(users)
})
app.post('/users',validate, (req,res)=>{
    const {name,email} = req.user; //data destructuring 
    const user={id:Date.now(),name,email}
    users.push(user)
    res.status(201).send({message:'user created successfully',user})
})
app.get('/users/:id',(req,res)=>{
    const id= req.params.id;
    const data = users.find(item=>item.id == id)
    if(data)
        res.status(200).send(data);
    else
        res.status(404).send({message:'no user available with this id'})
})
app.put('/users/:id',(req,res)=>{
    const id= req.params.id;
    const data = users.find(item=>item.id == id)
    if(data){
        data.name = req.body.name;
        return res.status(200).send({message:"user updated successfully",data});
    }
    res.status(404).send({message:'no user available with this id'})
})
app.delete('/users/:id',(req,res)=>{
    const id= req.params.id;
    const data = users.find(item=>item.id == id)
    if(data){
        users = users.filter(item => item.id !=id)
        return res.status(200).send({message:'user deleted',data})
    }
    res.status(200).send({message:`User not found with id ${id}`})
})
app.listen(5000,()=>console.log('server started'))
//Endoint: http://localhost:5000/users