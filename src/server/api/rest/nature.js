import { Router } from 'express'
import axios from 'axios'
const baseURL = 'http://api.nature.com/content/opensearch'

export default Router()
  .post('/:query', (req, res, next) => {
    const searchOptions = req.body.options || {}
    // @ts-ignore
    axios({
      method: 'get',
      url: '/request',
      baseURL,
      params: {
        query: req.params.query,
        queryType: 'searchTerms',
        httpAccept: 'application/json'
      }
    })
      .then(res => res.data)
      .then(results => {
        console.log(results.feed.entry)
        res.json(results.feed.entry)
      })
      .catch(next);
  })