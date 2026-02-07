import { connect } from "mongoose";

const connectDB = async ()=>{
    try{
        await connect(process.env.MONGO_URI);
        console.log("DB CONNECTED")
    }catch(err){
        console.log("DB NOT CONNECTED")
        process.exit(1);
    }
}

export default connectDB;