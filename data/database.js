import mongoose from "mongoose";

const MONGO_URI=process.env.MONGO_URI || "mongodb://localhost:27017/";

export const connectDB =()=>{
    mongoose.connect(MONGO_URI,{

    }).then((c)=>console.log(`db connected working`))
    .catch((e)=>console.log(e));
};
