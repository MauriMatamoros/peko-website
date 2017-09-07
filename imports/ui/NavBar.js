import React from 'react';
import Link from 'react-router';
import { Meteor } from 'meteor/meteor';

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                      Menu <i className="fa fa-bars"></i>
                  </button>
                  <a className="navbar-brand page-scroll" href="#page-top">
                      <img src="/images/PekoLogo.png"/>
                  </a>
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
                  </ul>
              </div>
          </div>
      </nav>
    );
  };
};
