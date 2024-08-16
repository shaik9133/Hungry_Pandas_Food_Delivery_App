const mongoose = require("mongoose")

const mongodbUrl="mongodb+srv://skmdbashid9133:AvDbMPpzquf164Ll@cluster0.hhxs8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectDB(){
    return mongoose.connect(mongodbUrl)
}

module.exports = connectDB