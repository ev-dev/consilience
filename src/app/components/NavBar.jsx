import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchQueryResults } from '../redux/queryReducer'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      queryInput: '',
      showDropdown: false
    }
  }

  toggleDropdown = () => {
    this.setState(state => ({
      ...state,
      showDropdown: !this.state.showDropdown 
    }))
  }

  handleChange = () => {

  }

  handleSubmit = evt => {

  }

  render() {
    const { showDropdown } = this.state
    return (
      <nav className='navbar is-dark'>
        <div className='navbar-brand'>
          <Link className='navbar-item' to='/'>
            Consilience
          </Link>
          <Link className='navbar-item' to='https://github.com/ev-dev'>
            <span className='icon'>
              <i className='fa fa-lg fa-github'></i>
            </span>
          </Link>
          <div 
            className={
              `navbar-burger burger ${showDropdown && 'is-active'}`
            }
            data-target='navMenu'
            onClick={this.toggleDropdown}
          > 
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id='navMenu'
          className={`navbar-menu ${showDropdown && 'is-active'}`}
        >
          <div className='navbar-start'>
            <Link to='/' className='navbar-item'>Home</Link>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link to='/' className='button is-primary'>
                    Control 1
                  </Link>
                </p>
                <p className='control'>
                  <Link to='/' className='button is-warning'>
                    Control 2
                  </Link>
                </p>
              </div>              
            </div>  
          </div>
        </div>
      </nav>
    )
  }
}

const mapDispatch = { fetchQueryResults }

export default withRouter(connect(null, mapDispatch)(NavBar))

/* 
<div className='navbar-dropdown is-boxed'>
  <Link to='/advanced' className='navbar-item'>
    Search
  </Link>
  <Link to='/feed' className='navbar-item'>
    Feed
  </Link>
  <Link to='/blog' className='navbar-item'>
    Blog
  </Link>
  <Link to='/sources' className='navbar-item'>
    Sources
  </Link>
  <Link to='/about' className='navbar-item'>
    About
  </Link>
  <hr className='navbar-divider' />
  <Link to='/profile' className='navbar-item'>
    Profile
  </Link>
</div>
*/