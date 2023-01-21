const connectDb = require('./db');
const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./controller/routes/Router');

//connectDb();

const app = express();
const port = 3000;

//Routes & middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use('/',routes);


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})