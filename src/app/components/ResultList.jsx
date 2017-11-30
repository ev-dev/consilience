import React, { Component } from 'react'
import { connect } from 'react-redux'
import { parse } from 'query-string'

import SingleResult from './SingleResult'
import { fetchQueryResults } from '../redux/queryReducer'

class ResultList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { fetchQueryResults, queryResults, isLoading, location } = this.props
    const { q, src } = parse(location.search)
    if (!queryResults.length) fetchQueryResults(q, 'arxiv')
    
    return (
      <div>
        <div id="result-title-container">
          <h1 className="title" id="result-title">Results for
            <span id='result-query'> {q}</span>
          </h1>
        </div>
        { !isLoading 
          ? <div className="button is-loading" id="results-loading"></div>
          :
            <div className="result-list-container">
              {queryResults && queryResults.map((result, i) => (
                <SingleResult resultData={result} key={i} />
              ))}
            </div>
        }
      </div>
    )
  }
}

const mapState = state => ({
  isLoading: state.query.isLoading,
  queryResults: state.query.results
})

const mapDispatch = { fetchQueryResults }

export default connect(mapState, mapDispatch)(ResultList)
