const express = require('express');
const Book = require('../models/Book'); 
const router = express.Router();

router.get('/', async (req, res) => {
  const { name, minRent, maxRent, category } = req.query;

  const query = {};
  if (name) query.bookName = { $regex: name, $options: 'i' };
  if (category) query.category = category;
  if (minRent && maxRent) query.rentPerDay = { $gte: minRent, $lte: maxRent };

  const books = await Book.find(query);
  res.json(books);
});

// Get all books
router.get('/all', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.post('/', async (req, res) => {
    try {
        const { bookName, category, rentPerDay } = req.body;
        const newBook = new Book({ bookName, category, rentPerDay });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: 'Error adding book', error });
    }
});

module.exports = router;
