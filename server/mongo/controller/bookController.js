const Book = require('../models/book');

module.exports = {
  getBooks: async (req, res) => {
    try {
      const getBooks = await Book.find()
      res.send(getBooks)
    } catch (error) {
      console.log(error)
    }
  }
}