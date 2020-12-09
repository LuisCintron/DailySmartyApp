import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchbar';
import RecentPost from './recentPost'

class Home extends Component {
  render() {
    return (
      <div>
        <Logo />
        <SearchBar />
        <RecentPost />
      </div>
    );
  }
}

export default Home;
