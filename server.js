// const express=require('express')

// const app=express();// server instannce create kr rha ha


// app.get('/',(req,res)=>{
//     res.send("hello world")
// })

// app.get("/about",(req,res)=>{
//     res.send("about page")
// })

// app.listen(3000);

const app=require("./src/app")
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})