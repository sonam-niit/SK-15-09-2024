import express from 'express'
import userroutes from './user-route.js'
const app= express();
app.use(express.json()); //json parser

app.use('/users',userroutes)

app.listen(5000,()=>console.log('server started'))
//Endoint: http://localhost:5000/users