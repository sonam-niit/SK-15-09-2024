import express from 'express';
import { upload } from './fileupload-middleware.js';
const app = express();

app.post('/upload',upload.single('image'),(req,res)=>{
    if(!req.file)
        return res.status(400).send({error:'No file uploaded'});
    res.send({
        message: 'Image uploaded successfully',
        filename: req.file.filename,
        path: `/images/${req.file.filename}`
    })
})
app.use('/images',express.static('images'))
//To access images from images folder created images folder as static

app.listen(5000,()=>console.log('application started'))