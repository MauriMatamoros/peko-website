import React from 'react';

import NavBar from './NavBar';
import Header from './Header';
import About from './About';
import Download from './Download';
import Contact from './Contact';
import Footer from './Footer';
import '../js/jquery.easing.min.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Header/>
        <About/>
        <Download/>
        <Contact/>
        <Footer/>
      </div>
    );
  };
};
