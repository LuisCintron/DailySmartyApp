import React, { Component } from 'react';
import { connect } from 'react-redux'

class ResultsPosts extends Component {
  render() {
    return (
      <ul className='results-posts'>
        <div className='results-post-wrapper'>
          <div className='results-posts_posts'>
            results go here
            </div>
        </div>
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return (state)
}

export default connect(mapStateToProps)(ResultsPosts);