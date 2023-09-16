import express from "express";
import { config } from "dotenv";
import cors from "cors"
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import path from "path";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser"
export const app=express();

config({
    path:"./data/config.env",
});
app.use(express.json());
app.use(cookieParser());
app.use(cors());



app.use("/api/v1/user",userRouter);
app.use("/api/v1/task",taskRouter);
app.get("/",(req,res)=>{
    res.send("nice working");
})

app.use(errorMiddleware);
