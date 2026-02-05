import app from "./app.js"

const PORT = 8080 || process.env.PORT; 


app.listen(PORT,(err,data)=>{
    console.log(`Listening on PORT ${PORT}`);
})