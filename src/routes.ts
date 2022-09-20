import { Router } from "express"
import * as BooksController from './controllers/BooksController'

const routes = Router()

routes.get('/books', BooksController.getAllBooks)


export default routes