import { Request, Response } from "express"
import Book from "../models/book"


export const getAllBooks = async (req:Request, res:Response) => {
  const books = await Book.findAll()

  res.status(200).json({
    success:true,
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