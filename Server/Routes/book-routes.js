const express = require("express")
const router = express.Router();
const bodyParser = require("body-parser")
const bookModel = require("../model/Book")
const booksController = require("../controllers/book-controller");

router.get("/", booksController.getAllBooks);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
