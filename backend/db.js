const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = process.env.MONGO_URI;

//method 1

// const connectToMongo = ()=>{
//  mongoose.connect(uri,()=>{
//     console.log("connected to mongo")
//  })
// }//we can pass dbName:dbname here for other db

//method2

const connectToMongo = ()=>{
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   //  dbName: 'MyDatabaseName',
  })
  .then(() => {
    console.log('Connected to the Mongo Database.');
  })
  .catch(err => console.error("error in connection to Database"));
}
module.exports = connectToMongo;