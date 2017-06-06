import React from 'react';

import Searchbar from './Searchbar';
import TopMenu from './TopMenu';

const Header = () => {
  // Array for randomr searchfield placeholder text
  const placeholderText = [
    "Search...",
    "Your favorite movie...",
    "e.g. Lord of the Ring",
    "What do you want to hear?"
  ];

  const style = {
    marginBottom:20
  }

  return (
    <div className="mns-header" style={style}>
      <TopMenu />
      <div className="container">
        <h1>Movies & Soundtracks</h1>
        <p>Find the soundtrack for your favorite movies</p>
        <Searchbar placeholder={placeholderText[Math.floor((Math.random() * placeholderText.length))]} />
      </div>
    </div>
  )
}

export default Header;
