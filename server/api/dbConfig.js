const mongoose = require('mongoose')

require('dotenv').config()

const connectMongoDB = () => {
  mongoose.connect(process.env.DATABASE_MONGODB, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverSelectionTimeoutMS: 5000,
    useCreateIndex: true 
})
.then(() => {
  console.log("Connect mongoDB success")
})
.catch(err => console.log(err)); 

mongoose.set('useFindAndModify', false);
}

module.exports = {
  connectMongoDB
}