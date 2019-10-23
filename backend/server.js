const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Connect to database
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

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

