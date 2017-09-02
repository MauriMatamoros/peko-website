import React from 'react';

import NavBar from './NavBar';

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <img id="main-page" src="/images/PekoFrontPage.png"/>
      </div>
    );
  }
};
