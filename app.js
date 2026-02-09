import express from "express"
import userRouter from "./routes/user.routes.js"
import postRouter from "./routes/post.router.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"


dotenv.config()

connectDB();

const app = express();

// BODY PARSER
app.use(express.json())

// BASE ROUTE
app.get("/",(req,res)=>{
    res.send("User Management API is running.")
})

// MOUNT ROUTER
app.use("/api/users",userRouter);
app.use("/api/posts",postRouter);


export default app;