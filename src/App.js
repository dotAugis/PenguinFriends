import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { friends } from "./friends";

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: friends,
      searchfield: '',
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredFriends = this.state.friends.filter(friend => {
      return friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1>SocialFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList friends={filteredFriends}/>
      </div>
    );
  }
}

export default App;