
const express =  require('express');
const NotesModel =  require('../src/models/notes.model');
const cors =  require('cors');
const path  = require('path');
const app = express();


app.use(express.json());
app.use(cors())

app.use(express.static("public"))


app.post("/api/notes", async(req,res)=>{
  
    const{title,description} = req.body;

    const note =  await NotesModel.create({
        title,description
    })
    res.status(201).json({
        message: "note created successfully",
        note
    })

    
})

app.get("/api/notes", async (req,res) =>{
    const notes = await NotesModel.find()


    res.status(200).json({
        message : "Fetched notes successfully",
        notes
    })
})

//:index 
app.delete("/api/notes/:index", async(req,res)=>{
      const id =  req.params.index;
      const note  =  await NotesModel.findByIdAndDelete(id);

       res.status(204).json({
        message:  "notes deleted successfully",
        note
       })
})

app.patch("/api/notes/:index", async(req,res)=>{
   
    const {description} = req.body;
    const id  =  req.params.index;
    console.log(description)
    const note =  await NotesModel.findByIdAndUpdate(id,{description});


    res.status(200).json({
        message : "note updated successfully"
    })
})

console.log(__dirname)
app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..",'./public/index.html'))
})


module.exports =  app;