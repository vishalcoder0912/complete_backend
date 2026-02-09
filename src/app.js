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

app.use(express.json())

app.post('/notes',(req,res)=>{
notes.push(req.body)
res.status(201).json({
    message:"note created succcessfully"
})
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        Message:"notes fetched successfully",
        notes:notes
    })
})

app.delete('/notes/:index',(req,res)=>{
   const index= req.params.index
    delete notes[index]
    res.status(200).json({
        message:"note deleted successfully"
    })

})



module.exports=app;