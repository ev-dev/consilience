const path = require('path')
  , express = require('express')
  , bodyParser = require('body-parser')
  , axios = require('axios')
  , { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
  , schema = require('./db/schema')
  , app = express()

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())

// Logging Middleware
  .use(require('volleyball'))
  
// All APIs With Cross-Origin Restraints
  .use('/api', require('./api'))
  
// Serve Graphql DB
  // .use('/gql', graphqlExpress({ schema }))
  // .use('/graphiql', graphiqlExpress({
  //   endpointURL: '/gql'
  // }))

// Serve React App
  .get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'bundle.js'))
  })

// Serve Assets
  .use((req, res, next) => {
    if (path.extname(req.path).length > 0) res.status(404).end()
    else next(null)
  })

// Serve HTML
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
  })

// Error Endware
  .use((err, req, res, next) => {
    console.error(err, typeof next)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal Server Error.')
  })


const PORT = 3000
const chalk = require('chalk')
app.listen(PORT, () => {
  const name = chalk.red.bold('[aggSci Server]')
  const url = chalk.cyan.bold(`http://localhost:`)
  const listen = chalk.yellow.bold('Listening')
  
  console.log(`
  ${name} - ${listen} - ${url}${chalk.yellow(PORT)}
  `)
})
