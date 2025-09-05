import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

async function dbConnect(){

    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('db connected')
    }
    catch(error){
        console.log(error,"error in db connection")
    }
  
}

export default dbConnect;