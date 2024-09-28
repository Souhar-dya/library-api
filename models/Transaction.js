const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  bookName: String,
  userId: String,
  issueDate: Date,
  returnDate: Date,
  rent: Number
});

module.exports = mongoose.model('Transaction', transactionSchema);
