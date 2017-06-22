import React from 'react';

import AlbumList from './AlbumList';
import Searchbar from './SearchBar';

const Home = () => {
  const placeholderText = [
    'e.g. Lord of the Rings',
    'Your alltime favorite movie',
    'The best filmscore ever...'
  ]

  return (
    <div className="container">
      <h1 className="mt-3 mb-3">Find the soundtrack for your favorite movies</h1>
      <Searchbar placeholder={placeholderText[Math.floor((Math.random() * placeholderText.length))]} />
      <AlbumList />
    </div>
  );
};

export default Home;
