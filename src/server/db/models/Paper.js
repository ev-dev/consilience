import { STRING } from 'sequelize'
import db from '../db'

const Paper = db.define('paper', {
  title: STRING
})

export default Paper