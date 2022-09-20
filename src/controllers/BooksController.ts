import { Request, Response } from "express"
import Book from "../models/book"


export const getAllBooks = async (req:Request, res:Response) => {
  const books = await Book.findAll()

  res.status(200).json({
    success:true,
    books
  })
}