


// practice

import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect(`mongodb://127.0.0.1:27017/Login`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
  console.log("MongoDB Connected")
}).catch
((err)=>{
  console.log("Connection failed", err);
});

const PORT = 5000;
app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`);
})