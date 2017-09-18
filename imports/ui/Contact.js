import React from 'react';

export default class Contact extends React.Component {
  render() {
      return (
        <section id="contact" className="container content-section text-center">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                  <h2>Contact Peko</h2>
                  <p>Your easy way to experience all the vast spectrum that Honduras has to offer in tourism</p>
                  <a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-facebook"></a>
                  <a href="https://instagram.com/pekohn" target="_blank" className="fa fa-instagram"></a>
                </div>
            </div>
        </section>
      );
  };
};
