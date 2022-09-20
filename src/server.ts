import express, { json } from 'express'

const server = express()
const port = 4000

server.use(json())
server.use(express.urlencoded({ extended: true }))

server.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})