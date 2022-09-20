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

export const editBook = async (req: Request, res: Response) => {
  const bookId = req.body.id

  if (bookId) {
    let changes: { author?: string, title?: string } = {}

    if (req.body.title && req.body.title.trim() !== '') changes.title = req.body.title
    if (req.body.author && req.body.author.trim() !== '') changes.author = req.body.author

    if (changes.author !== undefined || changes.title !== undefined) {
      await Book.update(changes, { where: { id: bookId } })

      res.status(200).json({
        success: true
      })
    } else {
      res.status(400).json({
        success: false,
        error: 'Preencha algum campo para alterar'
      })
    }
  } else {
    res.status(400).json({
      success: false,
      error: 'Livro não encontrado'
    })
  }
}

export const deleteBook = async (req: Request, res: Response) => {
  const bookId = req.body.id

  if (bookId) {
    const destroyed = await Book.destroy({ where: { id: bookId } })
    if (destroyed > 0) {
      res.status(200).json({
        success: true
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
      error: 'Erro ao deletar livro. Tente novamente mais tarde'
    })
  }
}