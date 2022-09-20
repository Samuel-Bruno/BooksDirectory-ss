# BooksDirectory

A simple CRUD api for a list of books

## Techs used

  - NodeJS
  - ExpressJS
  - Sequelize
  - MySql2
  - Typescript
  - UUID

## Run this project

  - clone this repository:
  > git clone https://github.com/Samuel-Bruno/BooksDirectory-ss
  - install dependencies:
  > npm i
  - start the project in development mode
  > npm run start-dev

## What you'll need

  - MySql running at port 3306
    - database named 'np_booksdirectory'
    - table named 'books'
  - user:root
  - no pass

### EndPoints
  > GET /books<br/>
  > return all books
  
  > GET /book/:bookId<br/>
  > return a book by given Id
  
  > POST /book<br/>
  > add a new book if given title and author
  
  > PUT /book<br/>
  > update a book with given Id
  
  > DELETE /book<br/>
  > delete a book with given Id