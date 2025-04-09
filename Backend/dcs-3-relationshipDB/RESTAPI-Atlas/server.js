import express from 'express';
import { connect } from './dbconfig.js';
import CategoryRoute from './routes/category-routes.js';
import ProductRoute from './routes/product-routes.js';
const app = express();
connect();
app.use(express.json()); //JSON Parser

app.use('/api/category',CategoryRoute);
app.use('/api/product',ProductRoute);

app.listen(5000,()=>console.log('Server Started'))