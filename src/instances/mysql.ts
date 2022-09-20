import { Sequelize } from "sequelize"


const Db = new Sequelize(
  'np_booksdirectory',
  'root',
  '',
  {
    dialect: 'mysql',
    port: 3306
  }
)

export default Db