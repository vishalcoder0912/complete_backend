const express=require('express')

const app=express();// server instannce create kr rha ha


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get("/about",(req,res)=>{
    res.send("about page")
})

app.listen(3000);