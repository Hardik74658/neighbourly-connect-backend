import dotenv from "dotenv"
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
        path:"../env"
    })

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("App is Listening On Port :: ",process.env.PORT || 8000);
    })
    app.on("error",(error)=>{
        console.log("Error Occured :: ",error);
        throw error;
    })
})
.catch((error)=>{
    console.log("MONGO DB Connection Eroor :: ",error);  
})

