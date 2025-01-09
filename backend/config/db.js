import mongoose from "mongoose";
export const connectDB = async()=> {
    try{
        const connect= await mongoose.connect(process.env.MONGODB_URL)
        console.log("connected to database")
    }
    catch(error)
    {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}