import React from 'react';

import AlbumList from '../containers/AlbumList';
import SearchBarContainer from '../containers/SearchBarContainer';

const Home = () => {
  return (
    <div className="container">
      <h1 className="mt-3 mb-3">Find the soundtrack for your favorite movies</h1>
      <SearchBarContainer />
      <AlbumList />
    </div>
  );
};

export default Home;
