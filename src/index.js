import {} from "dotenv/config"; //this is imp to access .env variables
import connectDB from "./db/index.js";  
import { app } from "./app.js";

//async funtions return a promise always
connectDB()
.then(()=>{
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`server is running at address: http://localhost:8000`);
    });
})
.catch((error)=>{
    console.log('MongoDB connection failed',error);
})

















/* I have written data base connection in db->index.js
import express from "express";
const app = express();
( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log('Error:', error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`);
        })
    } 
    catch (error) {
        console.log("Error:", error);
        throw error;
    }
})()
*/