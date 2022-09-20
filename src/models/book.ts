import Sequelize from "sequelize"
import Db from "../instances/mysql"


const Book = Db.define('Book', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    autoIncrement: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  tableName: 'books',
  createdAt: false,
  updatedAt: false
})


export default Book