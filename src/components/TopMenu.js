import React from 'react';

const TopMenu = () => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <div className="container">

        <button type="button" className="navbar-toggler navbar-toggler-right"
                data-toggle="collapse" data-target="#mns-navbar-collapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Movies & Soundtracks</a>

        <div className="collapse navbar-collapse" id="mns-navbar-collapse">
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link">Browse</a>
          </div>
          <div className="navbar-nav ml-auto">
            <a href="#" className="nav-item nav-link">Register</a>
            <a href="#" className="nav-item nav-link">Log in</a>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default TopMenu;
