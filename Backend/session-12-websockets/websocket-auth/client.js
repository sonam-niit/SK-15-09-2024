import jwt from 'jsonwebtoken'
import WebSocket from "ws";
const key ='my-secret-key'
const user= {id:1,name:'alex',email:'alex@gmail.com'}
const token = jwt.sign(user,key);
console.log(token)
const ws = new WebSocket(`ws://localhost:8080/?token=${token}`);
ws.on('open',()=>{
    console.log('connected to server');
    ws.send('This is Secure message')
})
ws.on('message', (msg) => {
    console.log(`Message from Server: ${msg}`)
})