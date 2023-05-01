import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      searchfield: '',
    }
  }

  componentDidMount() { // user API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => this.setState({ friends: users}));
  }

    onSearchChange = (event) => { 
      this.setState({ searchfield: event.target.value })
    }

  render() {
    const { friends, searchfield } = this.state;
    const filteredFriends = friends.filter(friend => {
      return friend.name.toLowerCase().includes(searchfield.toLowerCase());
    })
      return !friends.length ?  // delayed load behavior
      <h1 class='loading' className = 'tc'><span>Loading</span> friendlist<span>!</span></h1> :    
      (
      // normal load behavior with scroll
        <div className='tc'>
          <h1 class='title'><span>social</span>Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary> 
              <CardList friends={filteredFriends}/>
            </ErrorBoundary>  
          </Scroll>
        </div>
      );
  }
}

export default App;