import React from 'react';

const Nav = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className='container'>
          <a className="navbar-brand" href="#root">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item active">
                <a className="nav-link" href="#root">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#root">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#root">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#root">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;