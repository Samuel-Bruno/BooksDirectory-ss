import { Request, Response } from "express"
import Book from "../models/book"
import { v4 as uuid } from "uuid"


export const getAllBooks = async (req: Request, res: Response) => {
  const books = await Book.findAll()

  res.status(200).json({
    success: true,
    books
  })
}

export const getBookById = async (req: Request, res: Response) => {
  const id = req.params.bookId

  if (id) {
    const book = await Book.findByPk(id)

    if (book !== null) {
      res.status(200).json({
        success: true,
        book
      })
    } else {
      res.status(400).json({
        success: false,
        error: 'Livro não encontrado'
      })
    }
  } else {
    res.status(400).json({
      success: false,
      error: 'Erro ao buscar livro. Tente novamente mais tarde'
    })
  }
}

export const addBook = async (req: Request, res: Response) => {
  let { author, title } = req.body

  if (author && title) {
    const bookId = uuid()

    const createdBook = await Book.create({
      id: bookId,
      author, title
    })

    res.status(200).json({ success: true, book: createdBook.get() })
  } else {
    res.status(400).json({
      success: false,
      error: 'Preencha todos os campos'
    })
  }
}