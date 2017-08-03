import React, { Component } from 'react';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import postData from './application-data';

class App extends Component {

  render() {
    return (
     <div>
       <SearchBar />
       {postData.map((post, i) => 
          <PostContainer key={i} data={post} />
        )}
     </div>
    );
  }
}

export default App;
