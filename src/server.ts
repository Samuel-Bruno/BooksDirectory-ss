import express, { json } from 'express'
import routes from './routes'

const server = express()
const port = 4000

server.use(json())
server.use(express.urlencoded({ extended: true }))

server.use('/api', routes)

server.listen(port, () => {
  console.log(`Server running at port: ${port}`)
})