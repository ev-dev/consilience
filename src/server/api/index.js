import { Router } from 'express'
import bodyParser from 'body-parser'
// import GraphQL from './graphql'
import RestAPI from './rest'

export default Router()
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  
  // .use('/graphql', GraphQL)
  .use('/', RestAPI)