const express = require('express');
const path = require('path')
const app = express(); 
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require("dotenv").config();
app.use(express.json())
app.use(express.static('./'))
app.get('/',(req,res)=>{
    res.send('home page')
}) 

app.use('/api/v1/tasks', tasks)
const start = async () => {
  
    try {
        await connectDB('mongodb+srv://arun:1234@cluster0.ubrme.mongodb.net/taskManager?retryWrites=true&w=majority');
        app.listen(8885, () => {
          console.log("server started");
        }); 
    } catch (error) {
        console.log(error) 
    }
}

 
start();
