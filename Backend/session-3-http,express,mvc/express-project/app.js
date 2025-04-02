import express from 'express'
import path from 'path'
import users from './users.json' assert {type:'json'}
//create server
const app = express();
//Get All
app.get('/users',(req,res)=>{
    res.status(200).json(users);
})
//Get By Id
app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const data=users.find(item=>item.id==id)
    if(data)
        res.status(200).json(data);
    else
        res.status(404).send({message:'Data Not found'})
})

app.get('/contact',(req,res)=>{
    res.status(200).send('<a href="/">Home</a><h1>Contact Page</h1>')
})
app.get('/about',(req,res)=>{
    res.status(200).send('<a href="/">Home</a><h1>About Page</h1>')
})
app.get('/news',(req,res)=>{
    res.status(200).send('<a href="/">Home</a><h1>News Page</h1>')
})
app.get('/',(req,res)=>{
    res.status(200).sendFile(path.resolve('index.html')); //absolute path
})
app.listen(5000,()=>console.log('server started'))