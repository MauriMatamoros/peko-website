import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import NavBar from './NavBar';

export default class Packages extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="showcase-container">
          <img src="/images/4k.jpeg"/>
        </div>
      </div>
    );
  }
}
