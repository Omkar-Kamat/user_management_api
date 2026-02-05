import chalk from "chalk";
import app from "./app.js"

const PORT = 8080 || process.env.PORT; 


app.listen(PORT,(err,data)=>{
    chalk.green(console.log(`Listening on PORT ${PORT}`));
    
})