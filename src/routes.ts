import { Router } from "express"
import * as BooksController from './controllers/BooksController'

const routes = Router()

routes.get('/books', BooksController.getAllBooks)
routes.get('/book/:bookId', BooksController.getBookById)
routes.post('/book', BooksController.addBook)
routes.put('/book', BooksController.editBook)
routes.delete('/book', BooksController.deleteBook)

routes.use((req, res, next) => {
  res.status(404).json({
    success:false,
    error:'Route not exists'
  })
})


export default routes