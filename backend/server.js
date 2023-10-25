import express from "express"
import router from "./router.js"
import env from "dotenv"
env.config()



const app=express();
app.use(express.json())
app.use("/api",router)
app.listen(process.env.PORT,()=>{
    console.log("Server Started");
})