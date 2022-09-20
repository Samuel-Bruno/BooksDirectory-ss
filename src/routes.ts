import { Router } from "express"
import * as BooksController from './controllers/BooksController'

const routes = Router()

routes.get('/books', BooksController.getAllBooks)
routes.get('/book/:bookId', BooksController.getBookById)
routes.post('/book', BooksController.addBook)


export default routes