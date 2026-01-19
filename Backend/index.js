import dotenv  from "dotenv";

dotenv.config()



import app from "./src/app.js";
import connectionDB from "./src/DataBase/connection.js";

const PORT=process.env.PORT || 3000

connectionDB()
.then(()=>{
    
    app.listen(PORT,(req,res)=>{
        console.log(`API is listening on port ${PORT}`)
        console.log(`API URL is: http://localhost:${PORT}`)
    })
    
}
).catch((error)=>{
    console.log("THere is an error while starting the server",error)
})