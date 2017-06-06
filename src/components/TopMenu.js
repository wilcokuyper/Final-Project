import React from 'react';

const TopMenu = () => {
  return (
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">

        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mns-navbar-collapse" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Movies & Soundtracks</a>
        </div>

        <div className="collapse navbar-collapse" id="mns-navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="#">Browse</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Register</a></li>
            <li><a href="#">Log in</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TopMenu;
