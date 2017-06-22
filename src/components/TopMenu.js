import React from 'react';
import { Link } from 'react-router-dom';

const TopMenu = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <div className="container">

        <button type="button" className="navbar-toggler navbar-toggler-right"
                data-toggle="collapse" data-target="#mns-navbar-collapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">Movies & Soundtracks</Link>

        <div className="collapse navbar-collapse" id="mns-navbar-collapse">
          <div className="navbar-nav">
            <Link to="/browse" className="nav-item nav-link">Browse</Link>
          </div>
          <div className="navbar-nav ml-auto">
            <Link to="/register" className="nav-item nav-link">Register</Link>
            <Link to="login" className="nav-item nav-link">Log in</Link>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default TopMenu;
