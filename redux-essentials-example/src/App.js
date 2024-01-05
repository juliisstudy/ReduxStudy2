import React from 'react';
import './App.css';
import Counter from './features/counter/Counter';
import PostList from './features/posts/PostList';

function App() {
  return (
    <div className="App">
    {/*<Counter />*/} 
        <PostList/>
    </div>
  );
}

export default App;
