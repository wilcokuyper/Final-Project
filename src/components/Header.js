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
        <h1 className="mt-5 mb-3">Find the soundtrack for your favorite movies</h1>
        <Searchbar placeholder={placeholderText[Math.floor((Math.random() * placeholderText.length))]} />
      </div>
    </div>
  )
}

export default Header;
