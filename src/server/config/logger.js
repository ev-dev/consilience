import { Router } from 'express'
import volleyball from 'volleyball'
import chalk from 'chalk'

import { pkgName, isProd, baseURL, PORT, dbConfig } from './index'

export const logger = Router().use(volleyball)

export const logListen = () => {
  const NAME = chalk.red.bold(`[${pkgName.toUpperCase()}]`)
      , FULL_URL = `${chalk.cyan.bold(baseURL)}${chalk.yellow(PORT)}`
      , len = pkgName.length
      , bars = len <= 14 ? 44 : len + 26
      , space = len <= 14 ? 22 - len : 4
      , btmSpace = len <= 14 ? 3 : len - 15

  if (isProd)
    console.log(`
      - ${pkgName} > Production Server @ ${baseURL}${PORT} -
    `)
  else
    console.log(`
          ${'-'.repeat(bars)}
          +   ${NAME}    ${chalk.blue.bold('Development')}${' '.repeat(space)}+
          +${' '.repeat(bars - 2)}+
          +   => ${chalk.yellow.bold('Listening')} @ ${FULL_URL}${' '.repeat(btmSpace)}+
          ${'-'.repeat(bars)}

          Database:  ${chalk.green.bold(dbConfig.type)}
          DB URL: ${chalk.cyan.bold(dbConfig.dbUrl)}
    `)
}