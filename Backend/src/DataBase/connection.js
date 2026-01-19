import mongoose from "mongoose";
import DB_NAME from "./const.js";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connection = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(
      `${process.env.MONGODB_URL}${DB_NAME}`,
      {
        bufferCommands: false
      }
    ).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  console.log("MongoDB connected");
  return cached.conn;
};

export default connection;
