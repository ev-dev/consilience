

const pkgName = process.env.npm_package_name
  , isProd = process.env.NODE_ENV === 'production'
  , useHMR = true
  , forceSeed = true
  , baseURL = 'http://localhost:'
  , PORT = isProd ? 8003 : 3000
  , hasSockets = true  // setup websockets for GraphQL Subscriptions
  , dbConfig = {
      activeDB: false,  // toggle DB use
      type: 'Local PostgresSQL',
      dbUrl: `http://localhost:${isProd ? 80 : 3000}`,
      forceSeed: false,
      seedConfig: {
        seedArxiv: true,  // seed entire arXiv dump
        numUsers: 30,
        papersPerUser: 20,
        totalNumComments: 3000
      }
    }

export { pkgName, isProd, baseURL, PORT, dbConfig, useHMR }
export { logger, logListen } from './logger'
export { default as errorHandler } from './error'
// export { default as initDB } from './DB'
// export { default as seedDB } from './seed'
