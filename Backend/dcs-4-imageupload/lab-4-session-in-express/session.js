import express from 'express'
import session from 'express-session'

const app = express();
app.use(session({
    secret: 'sonam-soni', //later we can set in .env
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 30000} //session expire in 1 minute
}))

app.get('/counter',(req,res)=>{
    if(req.session.views){
        req.session.views++
    }else{
        req.session.views =1
    }
    res.send('You visited this page '+req.session.views+' times')
})

app.get('/reset',(req,res)=>{
    req.session.views=0
    res.send('Counter Reste')
})

app.listen(5000,()=>{console.log('Server is running')})