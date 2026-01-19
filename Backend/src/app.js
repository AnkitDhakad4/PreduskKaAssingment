
import dotenv  from "dotenv";

dotenv.config()

import express, { urlencoded } from "express";
import cors from "cors"
import router from "./Routes/Profile.routes.js";


const app=express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())

const allowedOrigins = [
  "http://localhost:5173",
  "https://predusk-ka-assingment.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (Postman, curl)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.get('/check', (req, res) => {
  return res.status(200).json({
    message: "Everything is working here"
  });
});


//calling the routes
app.use('/api/v1',router)


export default app

