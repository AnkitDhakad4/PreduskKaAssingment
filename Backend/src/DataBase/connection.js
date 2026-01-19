import mongoose from "mongoose";
import DB_NAME from "./const.js"

const connection=async  ()=>{
    try {
        // console.log(`${process.env.MONGODB_URL}`)
        const response=await mongoose.connect(`${process.env.MONGODB_URL}${DB_NAME}`)
        if(response)
        {
            console.log("Data Base is connected",response.connection.host)
        }
    } catch (error) {
        console.log("Error while connecting with the Data Base",error)
        throw new Error("Error while connecting to the Data Base",error)
    }
    
}


export default connection;
