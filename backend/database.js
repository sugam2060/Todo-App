const mongoose = require('mongoose');

async function connect(){
    await mongoose.connect('mongodb+srv://sugam2060:W07mLjoGwQCNMYqE@cluster0.czgcs38.mongodb.net/TodoApp')
}

connect();

const PayloadSchema = mongoose.model('payloads',{
    title: String,
    description: String
})

async function Insert(title,description){
    const Payload = new PayloadSchema({
        title: title,
        description:description
    })

    await Payload.save();
}


module.exports = {
    Insert
}