import express from 'express';
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config();
import dbConnect from './config/dbConnect.js';
import authRoutes from './routes/authRoutes.js';


const app = express();
app.use(express.json())
dbConnect();


//test
app.get('/',(req,res)=>{
    res.send('testing')
})

app.use('/api',authRoutes);


app.listen(process.env.PORT,()=>{
    console.log('server is running');
})

