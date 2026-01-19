
import dotenv  from "dotenv";

dotenv.config()

import express, { urlencoded } from "express";
import cors from "cors"
import router from "./Routes/Profile.routes.js";


const app=express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())


app.use(cors(
    {
        origin:process.env.originLink,
        credentials:true
    }
))

app.get('/check', (req, res) => {
  return res.status(200).json({
    message: "Everything is working here"
  });
});


//calling the routes
app.use('/api/v1',router)


export default app

