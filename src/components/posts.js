import React, { Component } from 'react';

class Posts extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.title}

        </li>
      </div>
    );
  }
}

export default Posts;