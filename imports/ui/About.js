import React from 'react';

export default class About extends React.Component {
  render() {
    return (
      <section id="about" className="container content-section text-center">
          <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <h2>About Peko</h2>
                <ul id="about-list">
                  <li>
                    <p>Visiting us for a new experience in your life.</p>
                  </li>
                  <li>
                    <p>Subscribe now and you will receive information about special tours.</p>
                  </li>
                  <li>
                    <p>Honduras has many great places, like the second largest coral reef in the world!.</p>

                  </li>
                </ul>
              </div>
          </div>
      </section>
    );
  };
};
