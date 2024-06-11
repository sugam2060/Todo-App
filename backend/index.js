const express = require("express");
const database = require('./database.js');
const type = require('./type.js')
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json());

app.post('/todos',async (req,res)=>{
    const createpayload = req.body;
    const parsedpayload = type.createPayload.safeParse(createpayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
        return
    }
    else{
        await database.Insert(createpayload.title,createpayload.description,false);
        res.status(200).json({
            msg:"payload created"
        })
    }
})

app.get('/todos',async (req,res)=>{
    const todo = await database.PayloadSchema.find({})
    res.status(200).json({
        todo
    })
})


app.put('/completed',async (req,res)=>{
    const updatedPayload = req.body;
    const parsedpayload = type.updatePayload.safeParse(updatedPayload);
    if(!parsedpayload.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
        return
    }
    else{
        await database.PayloadSchema.updateOne({
            _id: req.body.id
        } , {
            completed: true
        })

        res.status(200).json({
            msg:"completed"
        })
    }
})

app.listen(3000);