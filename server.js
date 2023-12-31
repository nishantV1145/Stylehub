import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from 'cors';

// import connectDB from './config/db.js';
// connectDB();

import mongoose from 'mongoose';

const DB = 'mongodb+srv://nishant0:test@cluster0.apvu2y7.mongodb.net/ecommerce?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
     console.log('MongoDB connected successful');
}).catch((err)=>{
      console.log('MongoDB not  connected');
});

// app.use(cors());
const app = express();
app.use(express.json());
app.use(morgan('dev'));
dotenv.config();
const PORT = process.env.PORT || 8080;

app.use('/api/v1/auth',authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);




app.get('/',(req,res)=>{
    res.send('welcome into good world')
});



app.listen(PORT,()=>{
     console.log(`server is running on PORT : ${PORT} `);
});