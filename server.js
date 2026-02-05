import app from "./app.js"

const PORT = 5000 || process.env.PORT; 


app.listen(PORT,(err,data)=>{
    console.log(`Listening on PORT ${PORT}`);
})