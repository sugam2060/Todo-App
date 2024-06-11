const mongoose = require('mongoose');

async function connect(){
    await mongoose.connect('mongodb+srv://sugam2060:W07mLjoGwQCNMYqE@cluster0.czgcs38.mongodb.net/TodoApp')
    console.log('connection stablished')
}

connect();

const PayloadSchema = mongoose.model('payloads',{
    title: String,
    description: String,
    completed: Boolean
})

async function Insert(title,description,completed){
    const Payload = new PayloadSchema({
        title: title,
        description:description,
        completed
    })

    await Payload.save();
}


module.exports = {
    Insert,
    PayloadSchema: PayloadSchema
}