const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(' ✅ Base de datos conectada con éxito ')
  } catch (error) {
    console.error(" ❌ Error conectando a MongoDB:", error)
  }
} 

module.exports = dbConnection