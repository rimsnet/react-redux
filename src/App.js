import React, { Component } from 'react';
import PostForm from './components/forms/PostForm';
import ViewPosts from './components/views/ViewPosts';

class App extends Component {
  render() {
    return (
      <div>
        <h3>React-Redux Load Balance</h3>
        <hr />
        <PostForm />
        <ViewPosts />
      </div>
    );
  }
}

export default App;
