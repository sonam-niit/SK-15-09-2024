import express from 'express'
import session from 'express-session'
import flash from 'connect-flash'

const app= express()
//Middlewares
app.use(session({
    secret:'secret123',
    resave: false,
    saveUninitialized: true
}))
app.use(flash())
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next()
})
app.set('view engine','ejs')//setting up template engine
app.get('/test',(req,res)=>{res.render('test')})
app.post('/submit',(req,res)=>{
    const {name} = req.body;
    if(!name){
        req.flash('error','Name is required')
        res.redirect('/test')
    }else{
        req.flash('success','Form Submitted successfully')
        res.redirect('/')
    }
    
})
app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/user',(req,res)=>{
    const user={name:'sonam soni',age:35,
        hobbies:['Reading','programming','Gaming']}
    res.render('user',{user})
})

app.listen(3000,()=>console.log('server started'))