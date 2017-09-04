import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import NavBar from './NavBar';

export default class Packages extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <h1>Puto el que lo lea</h1>
        <button onClick={() => Accounts.logout()}>Logout</button>
      </div>
    );
  }
}
