const express=require("express");
const app=express();

/*
note ={
title :"my first note",
description : "these is myt first note"


}
const notes={
}




*/

const notes=[]

app.post('/notes',(req,res)=>{

console.log(req.body);

})


module.exports=app;