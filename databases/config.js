const mongoose = require("mongoose")

const dbConection = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log("base de datos online")
    } catch (error) {
        throw new Error ("error a la hora de conectar base de datos")
    }
}

module.exports = {
    dbConection,
}