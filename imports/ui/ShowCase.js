import React from 'react';
import NavBar from './NavBar';

export default class ShowCase extends React.Component {
  render() {
    return (
      <div>
        <NavBar/>
        <section id="download" className="content-section text-center">
          <h1>Roatan</h1>
            <div className="roatan-section">
                <div className="container">
                    <div className="col-lg-8 col-lg-offset-2">
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                </div>
            </div>
            <div className="text-center col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-12">
              <button className="btn-default showcase-btn">Visit</button>
            </div>
        </section>
        <section id="download" className="content-section text-center">
          <h1>Utila</h1>
            <div className="utila-section">
                <div className="container">
                    <div className="col-lg-8 col-lg-offset-2">
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                </div>
            </div>
            <div className="text-center col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-12">
              <button className="btn-default showcase-btn">Visit</button>
            </div>
        </section>
        <section id="download" className="content-section text-center">
          <h1>Guanaja</h1>
            <div className="guanaja-section">
                <div className="container">
                    <div className="col-lg-8 col-lg-offset-2">
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                      <br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                </div>
            </div>
            <div className="text-center col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-4 col-sm-4 col-sm-offset-4 col-xs-12">
              <button className="btn-default showcase-btn">Visit</button>
            </div>
        </section>
      </div>
    );
  };
};
