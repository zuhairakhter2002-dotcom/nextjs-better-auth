import mongoose from "mongoose";

const mongoURI = process.env.MONGODB_URI

let cached = global.mongoose || {conn:null,promise:null}

export async function connectDb (){
    if(cached.conn) return cached.conn
    if(!cached.promise){
        cached.promise = mongoose.connect(mongoURI)
        // console.log('db is connected');
        
    }
    cached.conn = await cached.promise
    return cached.conn
}