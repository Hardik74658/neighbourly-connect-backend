import mongoose from "mongoose";
import {DB_NAME } from "../constants.js";


export const connectDB = async () =>{

    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MongoDB Connected Successfully :: DB Host :: ", connectionInstance.connection.host);

    } catch (error) {
        console.log("MongoDB Connection ERROR :: ",error);
        process.exitCode=1
        //process.exit(1)
    }

}




