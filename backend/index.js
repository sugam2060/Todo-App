const express = require("express");
const database = require('./database.js');
const type = require('./type.js')

const app = express();

app.use(express.json());

app.post('/todos',(req,res)=>{
    const createpayload = req.body;
    const parsedpayload = type.createPayload.safeParse(createpayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
        return
    }
    else{
        database.Insert(createpayload.title,createpayload.description);
        res.status(200).json({
            msg:"payload created"
        })
    }
})

app.listen(3000);