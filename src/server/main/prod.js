import path from 'path'
import { Router } from 'express'

import API from '../api'

export default Router()
  /* --- API Router --- */
  .use(API)
  
  /* --- Serve React App --- */
  .get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'dist', 'bundle.js'))
  })

  /* --- Serve Assets --- */
  .use((req, res, next) => {
    if (path.extname(req.path).length > 0) res.status(404).end()
    else next(null)
  })

  /* --- Serve Root HTML --- */
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'dist', 'index.html'))
  })
