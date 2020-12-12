import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchbar';
import RecentPost from './recentPost'

class Home extends Component {
  handleFormSubmit = function (query) {
    console.log('trying to submit for query', query)
    this.props.history.push('/results');
  }
  render() {
    return (
      <div>
        <Logo />
        <SearchBar onSubmit={(query) => this.handleFormSubmit(query)} />
        <RecentPost />
      </div>
    );
  }
}

export default Home;
