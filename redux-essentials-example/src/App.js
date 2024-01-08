import React from 'react';
import './App.css';
//import Counter from './features/counter/Counter';
import PostList from './features/posts/PostList';
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <div className="App">
    {/*<Counter />*/} 
        <AddPostForm/>
        <PostList/>
    </div>
  );
}

export default App;
