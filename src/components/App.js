import React, { Component } from 'react'
import PostList from './PostList';

export class App extends Component {
  render() {
    return (
      <div className="ui container">
        App
        <PostList />
      </div>
    )
  }
}

export default App
