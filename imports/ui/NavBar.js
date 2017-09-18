import React from 'react';
import { Link } from 'react-router';

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                      Menu <i className="fa fa-bars"></i>
                  </button>
                  <Link className="navbar-brand page-scroll" to="/">
                      <img src="/images/PekoLogo.png"/>
                  </Link>
              </div>

              <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                  <ul className="nav navbar-nav">
                      <li className="hidden">
                          <a href="#page-top"></a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#about">About</a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#download">Download</a>
                      </li>
                      <li>
                          <a className="page-scroll" href="#contact">Contact</a>
                      </li>
                      <li>
                        <Link to="/showcase">Tour Packages</Link>
                      </li>
                      <li>
                        <Link to="/routes">Routes</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  };
};
