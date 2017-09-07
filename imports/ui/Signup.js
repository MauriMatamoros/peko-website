import React from 'react';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  };
  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 9) {
      return this.setState({error: 'Password must be more than 8 characters long'});
    }

    Accounts.createUser({ email, password }, (err) =>{
      if (err) {
        this.setState({error: err.reason});
      }else {
        this.setState({error: ''});
      }
    });
  };
  render() {
    return(
      <div className="login-container">
        <div className="bgVideo">
          <div className="video-container">
            <video autoPlay loop muted preload="auto">
              <source src="assets/pekos_video.mp4" type="video/mp4"></source>
              Su navegador no soporta video
            </video>
          </div>
        </div>
        <h1>Join Short Lnk</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)} noValidate className="form-container">
          <input type="email" ref="email" name="email" placeholder="Email"/>
          <input type="password" ref="password" name="password" placeholder="Password"/>
          <button>Create Account</button>
        </form>
        <Link to='/login'>Already have an account?</Link>
      </div>
    );
  };
};
