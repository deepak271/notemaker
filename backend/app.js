const connectDb = require('./db');
const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./controller/routes/Router');
const cors = require('cors');
require('dotenv').config();

connectDb();

const app = express();
const port = process.env.PORT || 8080;

//Routes & middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use('/api/auth',routes);
app.use('/api/note',routes)


app.listen(port, () => {
  console.log(`app listening on port: ${port}`)
})