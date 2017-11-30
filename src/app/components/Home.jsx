import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SearchBasic from './SearchBasic'

let currentFieldIndex = 0
const toggleFields = () => {
  currentFieldIndex++
  return fieldsList[currentFieldIndex]
}

class Home extends Component {
  state = {
    fieldsList: [
      'Quantum Gravity',
      'Optigenetics',
      'Deep Reinforcement Neural Networks',
      'Climate Change',
      'Biophysics',
      'Condensed Matter'
    ],
    currentFieldIndex: 0,
    currentField: 'Quantum Gravity',
    sources: [{
      name: 'Nature Journal',
      pathURL: 'nature',
      srcURL: 'https://nature.com'
    }, {
      name: 'arXiv Preprint Service',
      pathURL: 'arxiv',
      srcURL: 'http://arxiv.org'
    }]
  }

  componentDidMount() {
    setInterval(this.toggleFields, 2000)
  }

  toggleFields = () => {
    const { fieldsList, currentFieldIndex } = this.state
    const nextField = currentFieldIndex < fieldsList.length ? 
      fieldsList[currentFieldIndex + 1]
      : fieldsList[0]

    this.setState(state => ({
      ...state,
      currentFieldIndex: currentFieldIndex + 1,
      currentField: nextField
    }))
  }

  render() {
    const { currentField, sources } = this.state
    return (
      <div className='has-text-centered'>
        <div className='home-banner-container'>
          <h1 className='home-title-p1'>A New Home</h1>
          <h2 className="home-title-p2">For The Latest Research.</h2>
          <h3 className='home-subtitle'>
            <em>Project Consilience</em> is an aggregator for scientific literature. 
          </h3>
          <h3 className='home-subtitle-p2'>
            We source popular publishers as well as preprint services.
          </h3>
          
          <div className='container home-search-container'>
            <div className='columns is-mobile'>
              <div className='column'></div>
              <div className='column'>
                <SearchBasic />
              </div>
              <div className='column'></div>
            </div>
          </div>

          <div className='field-rotator-container'>
            <p className='find-latest-title'>Find The Latest In:</p>
            <Link
              className='field-rotator-current'
              to={`/latest/${currentField}`}>
                {` ${currentField}`}
            </Link>
          </div>

          <div className='container source-list-container'>
            <h3 className='source-list-title'>
              Our Current Sources
            </h3>
            <div className='source-list'>
              {sources.map(src => (
                <div className='single-source'>
                  <span>
                    <Link className='single-source-name'
                      to={`/sources/${src.pathURL}`}>
                        {src.name}
                    </Link>
                    <Link to={src.srcURL}>
                      <span className='icon'>
                        <i className='fa fa-sort-up'></i>
                      </span>
                    </Link>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
