const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config(); 

const booksRoutes = require('./routes/books');  
const usersRoutes = require('./routes/users');  
const transactionsRoutes = require('./routes/transactions');  

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  }).then(() => {
    console.log('Connected to MongoDB Atlas');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  
app.use('/books', booksRoutes);
app.use('/users', usersRoutes);
app.use('/transactions', transactionsRoutes);

module.exports = app;
