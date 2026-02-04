import express from "express"
import userRouter from "./routes/user.routes.js"

const app = express();

// BODY PARSER
app.use(express.json())

// BASE ROUTE
app.get("/",(req,res)=>{
    res.send("User Management API is running.")
})

// MOUNT ROUTER
app.use("/api/users",userRouter);


export default app;