const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

'use strict';

require('dotenv').config();


const app = express();

const port = process.env.port || 5000;
const uri = process.env.ATLAS_URI;


app.use(cors());
app.use(express.json());
app.set('host', 'localhost');

//Connect to database

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
  .then(() => { console.log('MongoDB connected...')})
  .catch(err => console.log(err));



const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


//Routes files
const tracksRouter = require('./routes/tracks');
const contractsRouter = require('./routes/contracts');

app.use('/tracks', tracksRouter);
app.use('/contracts', contractsRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

module.exports = app;