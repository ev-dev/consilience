import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { stringify } from 'query-string'

import { fetchQueryResults } from '../redux/queryReducer'

class SearchBasic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queryInput: ''
    }
  }

  handleQueryChange = ({ target }) => {
    this.setState(state => ({
      ...state,
      queryInput: target.value
    }))
  }

  handleQuerySubmit = evt => {
    const { fetchQueryResults } = this.props
    const { queryInput } = this.state
    evt.preventDefault()

    fetchQueryResults(queryInput, 'arxiv')

    const searchParams = stringify({
      src: 'all',
      q: queryInput
    })
    this.props.history.push(`/results?${searchParams}`)
  }

  render() {
    return (
      <form onSubmit={this.handleQuerySubmit}>
        <div className='field has-addons'>
          <div className='control has-icons-left'>
            <input
              onChange={this.handleQueryChange}
              className='input searchbar-input'
              name='search-advanced'
              type='search'
              required
              placeholder='Find Papers...'
            />
            <span className='icon is-small is-left'>
              <i className='fa fa-search'></i>
            </span>
          </div>
          <div className='control'>
            <button 
              className='button is-dark'
              type='submit'>
                Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}

const mapDispatch = { fetchQueryResults }

export default withRouter(connect(null, mapDispatch)(SearchBasic))
