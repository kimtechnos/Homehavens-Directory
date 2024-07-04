import express from 'express';
import {config} from 'dotenv'

const  app = express();
 app.listen(3000,()=>{
    console.log("server running on port 3000...")
 })